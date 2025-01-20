const form = document.getElementById("authForm");
const submitButton = document.getElementById("submitButton");
const username = document.getElementById("username");
const password = document.getElementById("password");

function validateForm() {
  const isValid = username.value && password.value;
  submitButton.disabled = !isValid;
}

username.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted:", {
    username: username.value,
    password: password.value,
  });
});



// language change 

