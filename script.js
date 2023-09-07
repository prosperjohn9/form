const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("password-confirm");
const errorMessage = document.getElementById("error-message");
function validatePasswords() {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;
    if (password !== confirmPassword) {
        errorMessage.textContent = "The passwords do not match";
        passwordField.classList.add("error");
        confirmPasswordField.classList.add("error");
    } else {
        errorMessage.textContent = "";
        passwordField.classList.remove("error");
        confirmPasswordField.classList.remove("error");
    }
}
// Add event listener to the form's submit button and call the function when clicked on it
passwordField.addEventListener("input", validatePasswords);
confirmPasswordField.addEventListener("input", validatePasswords);