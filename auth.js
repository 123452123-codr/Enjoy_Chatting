const firebaseConfig = {
    apiKey: "AIzaSyBJeMPQagpmNm8MGsHhw9aBlwoVU9yTegg",
    authDomain: "enjoychatting-pro.firebaseapp.com",
    databaseURL: "https://enjoychatting-pro-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "enjoychatting-pro",
    storageBucket: "enjoychatting-pro.appspot.com",
    messagingSenderId: "509860403153",
    appId: "1:509860403153:web:1680629d8b641e2455f2f0",
    measurementId: "G-52P9TL2VQM"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // DOM Elements
  const authForm = document.getElementById('authForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const signupBtn = document.getElementById('signupBtn');
  
  // Sign up button click event
  signupBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        console.log("User signed up:", userCredential.user.uid);
        // Optionally, redirect the user to another page
      })
      .catch((error) => {
        // Handle errors
        console.error("Sign up error:", error.message);
        alert(error.message); // Display error to the user
      });
  });
  
  // Form submission event
  authForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in successfully
        console.log("User signed in:", userCredential.user.uid);
        // Optionally, redirect the user to another page
      })
      .catch((error) => {
        // Handle errors
        console.error("Sign in error:", error.message);
        alert(error.message); // Display error to the user
      });
  });
  