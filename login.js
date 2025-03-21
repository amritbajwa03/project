import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEns1OdB5uU360NKuQQevTCX6VjJyYbZk",
    authDomain: "cybereducationproject.firebaseapp.com",
    projectId: "cybereducationproject",
    storageBucket: "cybereducationproject.firebasestorage.app",
    messagingSenderId: "488137544324",
    appId: "1:488137544324:web:21ca7e0c0692af3f8ea8d1"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

submit.addEventListener("click", function (event) {
    event.preventDefault()

    //inputs 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // submit button
    const submit = document.getElementById('submit');


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // logging in
            const user = userCredential.user;
            alert("Logging in...")
            window.location.href = "home.html";

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });


})

