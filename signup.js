
import { auth, 
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
   updatePassword,
   GoogleAuthProvider,
  signInWithPopup,



  //firestore

   doc, setDoc, db,  getDoc
 
 } from "./firebase.js";



   //sign-up-form

   const register = async (e) => {
    e.preventDefault();
    
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const contact = document.getElementById("contact").value;
    const name = document.getElementById("name").value;
  
    try {
      let userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
      
      // Redirect after success
      window.location.href = "login.html"; 
  
    } catch (error) {
      console.log("Error during registration:", error.message);
    }
  };
  
  document.getElementById("signup-form")?.addEventListener("submit", register);
  

//sign-in


const signIn = async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password);
    let user = userCredential.user;

    console.log("User Signed In:", user);

    
    if (email === "anumrajj@gmail.com") {
      window.location.href = "./admin.html";
    } else {
      window.location.href = "profile.html";
    }

  } catch (error) {
    console.log("Login Error:", error.message);
  }
};

document.getElementById("login-form")?.addEventListener("submit", signIn);



//Logout button

const _signOut = ()=> {
  console.log("hello")
signOut(auth);

window.location.pathname = "/login.html";

} 

document.getElementById("signOut")?.addEventListener("click", _signOut);



//auth state 




// onAuthStateChanged(auth, (user) => {
//   if (user) {
    
 
//     const uid = user.uid;
//     console.log("user");
//   } else {
//     console.log("user signed out");
//     if (window?.location?.pathname === "./profile.html") {
//             window.location.replace ("/");
      
//           }
   
//   }
// });
// console.log("---", window.location.pathname);



//update password


const UpdatePswd =async ()=>{
  try {
    const user = auth.currentUser;
    const newPswd = document.getElementById("newPswd").value;
    await updatePassword(user, newPswd)
    console.log("Password Updated");
    alert("Password updated successfully!");
  } catch (error) {
    console.log(error);
    
  }
}

document.getElementById("updatePswd")?.addEventListener("click",  UpdatePswd);


// sign in with google

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const sigInWithGoogle = async () => {
  try {
           await signOut(auth);
           console.log("user signout");
           const result = await signInWithPopup(auth, provider);
           console.log(result.user);
  } catch (error) {
    console.log( error);
}
};
document.getElementById("sigInWithGoogle")?.addEventListener("click", sigInWithGoogle);
  


          

// profile update karna (user ka)

const updateProfile = async ()=> {
  const name = document.getElementById("prof-username").value;
  const userRef = doc(db, "users", auth.currentUser.uid);
  console.log(auth.currentUser.uid);
  await updateDoc(userRef, {
name
  
 });
}
 document.getElementById("prof-username")?.addEventListener("blur", updateProfile)

const elements = document.querySelectorAll(".update")
  
elements.forEach((elem)=>{
  // document.getElementById("prof-username")
  elem.addEventListener("blur", async ()=>{
    
    // console.log(elem.name);
    
    const userRef = doc(db, "users", auth.currentUser.uid);
  console.log(auth.currentUser.uid);
  await updateDoc(userRef, {
   [elem.name]: elem.value
  });
  }
  )

})







  









