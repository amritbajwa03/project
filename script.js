document.addEventListener("DOMContentLoaded", () => {
  // Password Strength Checker
  const passwordInput = document.getElementById("password-input");
  const passwordCheckButton = document.getElementById("check-strength");
  const togglePassword = document.getElementById("toggle-password");
  const feedback = document.getElementById("password-feedback");

  if (togglePassword) {
      togglePassword.addEventListener("click", () => {
          if (passwordInput.type === "password") {
              passwordInput.type = "text";
              togglePassword.src = "hide_pass.png";
          } else {
              passwordInput.type = "password";
              togglePassword.src = "show_pass.png";
          }
      });
  }

  if (passwordCheckButton) {
      passwordCheckButton.addEventListener("click", () => {
          if (!passwordInput) return;
          const password = passwordInput.value;
          let score = 0;
          if (password.length >= 12) score++;
          if (/[A-Z]/.test(password)) score++;
          if (/[a-z]/.test(password)) score++;
          if (/[0-9]/.test(password)) score++;
          if (/[^A-Za-z0-9]/.test(password)) score++;

          feedback.classList.remove("weak", "moderate", "strong");

          switch (score) {
              case 0:
              case 1:
                  feedback.textContent = "Weak password. Consider using a longer password.";
                  feedback.classList.add("weak");
                  break;
              case 2:
              case 3:
                  feedback.textContent = "Moderate password. Add more complexity.";
                  feedback.classList.add("moderate");
                  break;
              case 4:
              case 5:
                  feedback.textContent = "Strong password! Good job.";
                  feedback.classList.add("strong");
                  break;
              default:
                  feedback.textContent = "";
          }
      });
  }

  // Phishing Email Simulation
  const phishingFeedback = document.getElementById("email-feedback");

  if (phishingFeedback) {
      const sender = document.getElementById("sender");
      const verifyLink = document.getElementById("verify-link");
      const subjectLine = document.getElementById("subject-line");

      if (sender) {
          sender.addEventListener("click", () => {
              phishingFeedback.textContent = "Suspicious Sender: Always verify the sender's email.";
              phishingFeedback.style.display = "block";
          });
      }
      if (verifyLink) {
          verifyLink.addEventListener("click", () => {
              phishingFeedback.textContent = "Suspicious Link: Never click on suspicious links.";
              phishingFeedback.style.display = "block";
          });
      }
      if (subjectLine) {
          subjectLine.addEventListener("click", () => {
              phishingFeedback.textContent = "Suspicious Subject: Be cautious of urgent requests.";
              phishingFeedback.style.display = "block";
          });
      }
  }

  // Spot the Real Email Feature
  const email1 = document.getElementById("email-1");
  const email2 = document.getElementById("email-2");
  const realEmailFeedback = document.getElementById("real-email-feedback");

  if (realEmailFeedback && email1 && email2) {
      email1.addEventListener("click", () => {
          realEmailFeedback.innerHTML = "<strong>Incorrect:</strong> This is a phishing email.";
          realEmailFeedback.style.display = "block";
      });

      email2.addEventListener("click", () => {
          realEmailFeedback.innerHTML = "<strong>Correct:</strong> This is a legitimate email.";
          realEmailFeedback.style.display = "block";
      });
  }

  // Spot the Real Website
  function checkAnswer(isReal) {
      const feedback = document.getElementById("feedback");
      if (feedback) {
          if (isReal) {
              feedback.innerHTML = "Correct! This is the legitimate Amazon website. It has a proper domain (amazon.co.uk), secure connection (HTTPS), and no browser warnings.";
              feedback.style.color = "green";
          } else {
              feedback.innerHTML = "Incorrect! This is a fake Amazon website. Notice the 'Dangerous' warning in the browser, potential misspellings, and lack of security indicators.";
              feedback.style.color = "red";
          }
      }
  }

  window.checkAnswer = checkAnswer;
});
