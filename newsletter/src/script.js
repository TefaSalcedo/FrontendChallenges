document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("useremail");
  const verificationParagraph = document.getElementById("verificacion");
  const subscribedButton = document.getElementById("subscribed");
  const checkNewsletter = document.getElementById("checknewsletter");
  const emailRegex = /^([a-zA-Z0-9\.\_\-]+)@([a-zA-Z0-9])+.([a-zA-Z0-9]{2,})$/;

  // Suscribe Button verification email input
  subscribedButton.addEventListener("click", () => {
    const isValidEmail = emailRegex.test(emailInput.value);
    if (!isValidEmail) {
      updateVerificationParagraph(
        "rgb(140, 55, 55)",
        "Please enter a valid email address."
      );
    } else if (checkNewsletter.checked) {
      updateVerificationParagraph(
        "green", 
        "Weekly newsletter Suscribe");
    } else {
      updateVerificationParagraph(
        "green",
        "Newsletter subscription confirmed!"
      );
    }
  });

  function updateVerificationParagraph(color, text) {
    verificationParagraph.style.color = color;
    verificationParagraph.hidden = false;
    verificationParagraph.textContent = text;
  }
});


