


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

