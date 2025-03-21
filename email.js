
// Initialize EmailJS
(function() {
  emailjs.init("6UnN5NSUlP8S3SiR2"); 
})();



// Function by the "Send Email" button
function sendResults() {
  const userName = document.getElementById("userName").value.trim();
  // Retrieve stored email from localStorage
  const storedEmail = localStorage.getItem('userEmail');

  if (!userName || !storedEmail) {
      alert("Please enter your name and email before sending results.");
      return;
  }

  if (window.userScore === undefined) {
      alert("Please complete the quiz before sending results.");
      return;
  }

  // Prepare email parameters
  const emailParams = {
      name: userName,
      to_email: storedEmail,
      score: window.userScore,  // Using stored global score
      total: window.totalQuestions
      title: window.courseTitle || "Cyber Security Course"
  };

  // Send email using EmailJS
  emailjs.send("service_87exwxt", "template_r75ms2p", emailParams)
      .then(function(response) {
          alert("Your quiz results have been sent to your email!");
          console.log("Email sent successfully:", response);
      })
      .catch(function(error) {
          alert("Failed to send email. Check the console for details.");
          console.error("EmailJS Error:", error);
      });
}

