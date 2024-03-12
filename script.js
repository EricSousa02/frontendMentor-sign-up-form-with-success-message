function subscribe(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  // Get the email input value
  var emailInput = document.getElementById("email");
  var email = emailInput.value;

  // Validate email format
  if (!validateEmail(email)) {
    showError();
    return;
  }

  // Display the success message with the confirmed email
  document.getElementById("confirmedEmail").innerText = email;
  document.getElementById("successMessage").style.display = "block";
  document.getElementById("main").style.display = "none";

  // Optional: Clear the form after submission
  document.getElementById("signupForm").reset();
}

function dismissMessage() {
  // Hide the success message
  document.getElementById("successMessage").style.display = "none";
  document.getElementById("main").style.display = "flex";
}

function validateEmail(email) {
  // Simple email validation using a regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError() {
  document.getElementById("input").classList.add("error");
  document.getElementById("errorMessage").style.display = "block";
}
