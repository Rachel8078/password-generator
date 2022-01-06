// Assignment code here
function generatePassword() {
  var passwordLength = window.prompt("Please choose a password length between 8 - 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password between 8 - 128 characters.");
    window.prompt("Please choose a password length between 8 - 128 characters.");
  }
  var characterTypes = window.prompt("Please indicate which character types to include: lowercase, uppercase, numeric, and/or special characters?");
  window.confirm("You have chosen a password length of " + passwordLength + " and the following character type(s): " + characterTypes+ ". Is this correct?");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);