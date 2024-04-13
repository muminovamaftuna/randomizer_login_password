// Function to generate random login and password
function generateLogin() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;

  // Check if both first name and last name are provided
  if (firstName.trim() === "" || lastName.trim() === "") {
    alert("Please enter both first name and last name.");
    return;
  }

  // Create login by combining first letter of first name and last name
  let login = firstName.charAt(0) + lastName;

  // Generate random password with letters, numbers, and special characters
  let passwordLength = 10;
  let password = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&_";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  // Display login and password
  let loginResult = document.getElementById("loginResult");
  loginResult.innerHTML = "Generated Login: " + login + "<br>Generated Password: " + password;
}
