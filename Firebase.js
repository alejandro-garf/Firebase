// Simple Functions to familirize myself

//Note to self: use the Firebase UI library to set up the sign in screen

//Import Firebase
const { initializeApp } = require("firebase/app");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } = require("firebase/auth");

//Authentication: Create an Account

//Config and Initialize Firebase
// Your web app's Firebase configuration (Does not exist yet for me)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth with the app

// Authentication: Create an Account
const email = "user@example.com"; // replace with user input
const password = "user_password"; // replace with user input

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User created successfully:", user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorCode, errorMessage);
    });

// Sign in with email and password
signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("User created successfully:", user);
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error creating user:", errorCode, errorMessage);
});


//Authentication with third part provider (Google)

const provider = new GoogleAuthProvider();
//Open pop up window and sign in
signInWithPopup(auth, provider)
    .then((result) => {
    // The signed in user info
    const user = result.user;
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error creating user:", errorCode, errorMessage);
});

//Check if user is signed in

onAuthStateChanged(auth, (user) => {
    if (user) {
        //user is logged in
        const name = user.displayName;
        const email = user.email;
        const uid = user.uid; 
    } else {
        //User is logged out
    }
});