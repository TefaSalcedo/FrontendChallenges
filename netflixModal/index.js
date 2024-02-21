// Get modal elements
const modal = document.getElementById("myModal");
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");
const loginButton = document.getElementById("loginButton");

// Open the modal
modal.style.display = "block";

// Validate email
emailInput.addEventListener("input", () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }
});

// Validate password length
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 4 || passwordInput.value.length > 60) {
    passwordError.textContent = "Password must be between 4 and 60 characters.";
  } else {
    passwordError.textContent = "";
  }
});

// Submit login
loginButton.addEventListener("click", () => {
  const emailValid = emailRegex.test(emailInput.value);
  const passwordValid =
    passwordInput.value.length >= 4 && passwordInput.value.length <= 60;

  if (emailValid && passwordValid) {
    // Submit login form
    modal.style.display = "none";
    alert("Login successful!");
  }
});

// Close the modal
const close = document.getElementsByClassName("close")[0];
close.onclick = () => {
  modal.style.display = "none";
};

// Prevent modal from closing when clicking inside it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};