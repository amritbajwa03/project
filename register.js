import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEns1OdB5uU360NKuQQevTCX6VjJyYbZk",
    authDomain: "cybereducationproject.firebaseapp.com",
    projectId: "cybereducationproject",
    storageBucket: "cybereducationproject.firebasestorage.app",
    messagingSenderId: "488137544324",
    appId: "1:488137544324:web:21ca7e0c0692af3f8ea8d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Account created successfully!");
                localStorage.setItem('userEmail', user.email);  // Store email 
                window.location.href = "home.html";
            })
            .catch((error) => {
                alert(`Error: ${error.message}`);
            });
    });
});
