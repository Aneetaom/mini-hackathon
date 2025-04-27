

//  Add Task Section 


// `<div class="card card-custom p-5 mt-5">
//   <h4 class="mb-4 fw-bold">Add Task</h4>
//   <div class="input-group">
//     <input id="userInput" type="text" class="form-control form-control-lg rounded-3" placeholder="Enter your task...">
//     <button class="btn btn-primary" onclick="saveData()">Add Task</button>
//   </div>
// </div>`

//  {/* Task List Section  */}

// <div class="row mt-5 g-4" id="taskContainer">

//    {/* Tasks will be dynamically added here  */}
// </div>


// // Task counter
// let taskCount = 0;
// const maxTasks = 6; // Maximum number of tasks to display

// // Function to save task
// function saveData() {
//   const userInput = document.getElementById('userInput').value.trim();
  
//   if (userInput === '') {
//     alert('Please enter a task!');
//     return;
//   }

//   if (taskCount >= maxTasks) {
//     alert(`Maximum ${maxTasks} tasks allowed!`);
//     return;
//   }

//   taskCount++;
//   addTaskToUI(userInput);
//   document.getElementById('userInput').value = ''; // Clear input field
// }

// // Function to add task to UI
// function addTaskToUI(taskText) {
//   const taskContainer = document.getElementById('taskContainer');
  
//   // Create task card
//   const taskCard = document.createElement('div');
//   taskCard.className = 'col-md-4';
//   taskCard.innerHTML = `
//     <div class="card card-custom p-4">
//       <div class="d-flex justify-content-between align-items-start">
//         <div>
//           <h6 class="fw-bold">Task ${taskCount}</h6>
//           <small class="text-muted">${taskText}</small>
//         </div>
//         <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(this)">
//           <i class="bi bi-trash"></i>
//         </button>
//       </div>
//       <div class="mt-3">
//         <small class="text-muted">Added: ${new Date().toLocaleTimeString()}</small>
//       </div>
//     </div>
//   `;
  
//   // Add animation
//   taskCard.style.opacity = '0';
//   taskContainer.prepend(taskCard);
  
//   // Fade in animation
//   setTimeout(() => {
//     taskCard.style.transition = 'opacity 0.3s ease';
//     taskCard.style.opacity = '1';
//   }, 10);
// }

// // Function to delete task
// function deleteTask(button) {
//   const taskCard = button.closest('.col-md-4');
//   taskCard.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
//   taskCard.style.transform = 'scale(0.9)';
//   taskCard.style.opacity = '0';
  
//   setTimeout(() => {
//     taskCard.remove();
//     taskCount--;
//     // Renumber remaining tasks
//     const tasks = document.querySelectorAll('.card-custom h6');
//     tasks.forEach((task, index) => {
//       task.textContent = `Task ${index + 1}`;
//     });
//   }, 300);
// }

//  {/* Initialize with some sample tasks if needed */}
// window.onload = function() {
//   // Add sample tasks (optional)
//   const sampleTasks = ['UI Design', 'Backend Setup', 'Calendar Widget'];
//   sampleTasks.forEach(task => {
//     taskCount++;
//     addTaskToUI(task);
//   });
// };


//  {/* Add Bootstrap Icons CDN in your head section  */}
import { db, collection, addDoc, serverTimestamp } from './firebase.js';

async function saveData() {
  const userInput = document.getElementById("userInput").value.trim();
  if (userInput === "") {
    alert("Please enter a task!");
    return;
  }
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      taskName: userInput,
      createdAt: serverTimestamp()
    });
    console.log("Task saved with ID:", docRef.id);
    addTaskToUI(userInput);
    document.getElementById("userInput").value = "";
  } catch (error) {
    console.error("Error adding task:", error);
  }
}

function addTaskToUI(taskName) {
  const displayRow = document.querySelector(".row.mt-5.g-4");
  const colDiv = document.createElement("div");
  colDiv.className = "col-md-4";
  const cardDiv = document.createElement("div");
  cardDiv.className = "card card-custom p-4";
  const title = document.createElement("h6");
  title.className = "fw-bold";
  title.innerText = "New Task";
  const description = document.createElement("small");
  description.className = "text-muted";
  description.innerText = taskName;
  cardDiv.appendChild(title);
  cardDiv.appendChild(description);
  colDiv.appendChild(cardDiv);
  displayRow.appendChild(colDiv);
}

// Save button ke liye event listener add karein
document.getElementById("saveButton").addEventListener("click", saveData);

