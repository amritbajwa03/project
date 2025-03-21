
// Initialize EmailJS
(function() {
  emailjs.init("6UnN5NSUlP8S3SiR2"); 
})();



// Function by the "Send Email" button
function sendResults() {
  const userName = document.getElementById("userName").value.trim();
  const userEmail = document.getElementById("userEmail").value.trim();

  if (!userName || !userEmail) {
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
      to_email: userEmail,
      score: window.userScore,  // Using stored global score
      total: window.totalQuestions
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

