


import {
    db,
    //  doc, 
     collection, getDocs
} from "./firebase.js";



const getAllUsers = async ()=>{
const usersTable = document.getElementById("all-users")

    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((currentUser) => {
  let user = currentUser.data();
    usersTable.innerHTML = `
     <tr>
          <td scoperow>1</td>
          <td>${user?.name}</td>
          <td>${user?.email}</td>
          <td>${user?.age}</td>
          <td>${user?.status}</td>
        </tr>`
  // doc.data() is never undefined for query doc snapshots
  console.log(user, " => ", doc.data());
});

}

getAllUsers;

// const getAIIUsers = async () => {
// const ref = query(collection(db, "users"), orderBy("age", "desc"));
// const unsubscribe = onSnapshot(ref, (querySnapshot) => {
//     let index = 1;
//     const userTable = document.getElementById("all-users");
//     userTable.innerHTML = ""
//     querySnapshot.foreach((currentUser) => {
//         let user = currentUser.data();
//         userTable.innerHTML += 
//         `<tr>
//         <th scope="row">$(index++)</th>
//         <td>${user?.name}</td>
//         <td>${user?.email}</td>
//         <td>${user?.name}</td>
        
//         `
//     })
// })
// }






//right code




// const getAllUsers = async ()=> {
//     const usersTable = document.getElementById("all-users");
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.foreach((currentUser) => {
//         let user = currentUser.data();
//         usersTable.innerHTML +=  `
//         <tr>
//         <th scope="row">1</th>
//         <td>${user?.name}</td>
//         <td>${user?.email}</td>
//         <td>${user?.age}</td>
//         <td>${user?.status}</td>
//         </tr>`
//     });
// }
// // getAIIUsers();








// chatgpt code right code







//   const getAllUsers = async () => {
//      const usersTable = document.getElementById("all-users");
//       usersTable.innerHTML = ""; // Clear table before adding new data

//       const querySnapshot = await getDocs(collection(db, "users"));
//      let index = 1; // Start index

//      querySnapshot.forEach((currentUser) => {
//          let user = currentUser.data();
//           usersTable.innerHTML += `
//           <tr>
//               <th scope="row">${index++}</th>
//               <td>${user?.name || "N/A"}</td>
//              <td>${user?.email || "N/A"}</td>
//               <td>${user?.age || "N/A"}</td>
//               <td>${user?.status || "N/A"}</td>
//                <td>
//                      <button type="button" onclick="updateStatus('${currentUser.id}', ${user?.isActive})" class="btn text-light bg-primary">Edit Status</button>
//                     <button type="button" onclick="deleteUser('${currentUser.id}')" class="btn text-light bg-danger">Delete</button>
//                  </td>
//           </tr>`;
//       });
//   };
//   getAllUsers();

//  right code yahan tak khatam










// const getAllUsers = async () => {
//     const usersTable = document.getElementById("all-users");
//     usersTable.innerHTML = ""; // Clear table before adding new data

//     const querySnapshot = await getDocs(collection(db, "users"));
//     let index = 1; // Start index

//     querySnapshot.forEach((currentUser) => {
//         let user = currentUser.data();
//         usersTable.innerHTML += `
//             <tr>
//                 <th scope="row">${index++}</th>
//                 <td>${user?.name || "N/A"}</td>
//                 <td>${user?.email || "N/A"}</td>
//                 <td>${user?.age || "N/A"}</td>
//                 <td id="status-${currentUser.id}">${user?.isActive ? "Active" : "Blocked"}</td>
//                 <td>
//                     <button type="button" onclick="updateStatus('${currentUser.id}', ${user?.isActive})" class="btn text-light bg-primary">Edit Status</button>
//                     <button type="button" onclick="deleteUser('${currentUser.id}')" class="btn text-light bg-danger">Delete</button>
//                 </td>
//             </tr>`;
//     });
// };

// getAllUsers();

// window.updateStatus = async (id, status) => {
//     try {
//         const userRef = doc(db, "users", id);
        
//         // Check if document exists before updating
//         const docSnap = await getDoc(userRef);
//         if (!docSnap.exists()) {
//             console.error("Error: User does not exist in Firestore.");
//             return;
//         }

//         await updateDoc(userRef, { isActive: !status });

//         console.log(`User status updated: ${!status}`);
        
//         // Update status in the table without reloading
//         document.getElementById(`status-${id}`).innerText = !status ? "Active" : "Blocked";

//     } catch (error) {
//         console.error("Error updating user status:", error);
//     }
// };

// window.deleteUser = async (id) => {
//     try {
//         await deleteDoc(doc(db, "users", id));
//         console.log("User deleted successfully.");
//         getAllUsers(); // Refresh table after deletion
//     } catch (error) {
//         console.error("Error deleting user:", error);
//     }
// };
