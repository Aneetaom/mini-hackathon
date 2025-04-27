

//  Add Task Section 


`<div class="card card-custom p-5 mt-5">
  <h4 class="mb-4 fw-bold">Add Task</h4>
  <div class="input-group">
    <input id="userInput" type="text" class="form-control form-control-lg rounded-3" placeholder="Enter your task...">
    <button class="btn btn-primary" onclick="saveData()">Add Task</button>
  </div>
</div>`

 {/* Task List Section  */}

<div class="row mt-5 g-4" id="taskContainer">

   {/* Tasks will be dynamically added here  */}
</div>


// Task counter
let taskCount = 0;
const maxTasks = 6; // Maximum number of tasks to display

// Function to save task
function saveData() {
  const userInput = document.getElementById('userInput').value.trim();
  
  if (userInput === '') {
    alert('Please enter a task!');
    return;
  }

  if (taskCount >= maxTasks) {
    alert(`Maximum ${maxTasks} tasks allowed!`);
    return;
  }

  taskCount++;
  addTaskToUI(userInput);
  document.getElementById('userInput').value = ''; // Clear input field
}

// Function to add task to UI
function addTaskToUI(taskText) {
  const taskContainer = document.getElementById('taskContainer');
  
  // Create task card
  const taskCard = document.createElement('div');
  taskCard.className = 'col-md-4';
  taskCard.innerHTML = `
    <div class="card card-custom p-4">
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <h6 class="fw-bold">Task ${taskCount}</h6>
          <small class="text-muted">${taskText}</small>
        </div>
        <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(this)">
          <i class="bi bi-trash"></i>
        </button>
      </div>
      <div class="mt-3">
        <small class="text-muted">Added: ${new Date().toLocaleTimeString()}</small>
      </div>
    </div>
  `;
  
  // Add animation
  taskCard.style.opacity = '0';
  taskContainer.prepend(taskCard);
  
  // Fade in animation
  setTimeout(() => {
    taskCard.style.transition = 'opacity 0.3s ease';
    taskCard.style.opacity = '1';
  }, 10);
}

// Function to delete task
function deleteTask(button) {
  const taskCard = button.closest('.col-md-4');
  taskCard.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  taskCard.style.transform = 'scale(0.9)';
  taskCard.style.opacity = '0';
  
  setTimeout(() => {
    taskCard.remove();
    taskCount--;
    // Renumber remaining tasks
    const tasks = document.querySelectorAll('.card-custom h6');
    tasks.forEach((task, index) => {
      task.textContent = `Task ${index + 1}`;
    });
  }, 300);
}

 {/* Initialize with some sample tasks if needed */}
window.onload = function() {
  // Add sample tasks (optional)
  const sampleTasks = ['UI Design', 'Backend Setup', 'Calendar Widget'];
  sampleTasks.forEach(task => {
    taskCount++;
    addTaskToUI(task);
  });
};


 {/* Add Bootstrap Icons CDN in your head section  */}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"></link>