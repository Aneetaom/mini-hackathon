

//is se uie banane me kon dashboard per or kon profile per redirect hoga 


import {
  onAuthStateChanged,
  doc, 
  auth,
  getDoc,
  db,
} from "./firebase.js";


  const register = async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    console.log(" Name:", name);
    console.log(" Age:", age);
    console.log(" Contact:", contact);
    console.log(" Email:", email);
    console.log(" Password:", password);
  
    if (!name || !age || !contact || !email || !password) {
      alert(" Please fill all the fields!");
      return;
    }
  
    try {
      let userCredential = await createUserWithEmailAndPassword(auth, email, password);
      let user = userCredential.user;
  
      console.log(" User Registered:", user);
  
      await setDoc(doc(db, "users", user.uid), {
        name,
        age,
        contact,
        email
      });
  
      console.log(" User data added to Firestore!");
  
      alert("Account created successfully! Please verify your email.");
      await sendEmailVerification(user);
    } catch (error) {
      console.log(" Error: ", error.message);
    }
  };
  
  document.getElementById("signup-form")?.addEventListener("submit", register);

  
  console.log(" Checking form event...");
document.getElementById("signup-form")?.addEventListener("submit", () => {
    console.log(" Form submitted!");
});
