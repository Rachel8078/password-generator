// Assignment code here

function generatePassword() {
    // determine password length (**still need to fix it so if they do the wrong number it won't let them)
    //(**also need to fix so the correct number logs as passwordLength) */
    var passwordLength = Number(window.prompt("Please choose a password length between 8 - 128 characters."));
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      return generatePassword();
      }
   
  // determine character styles (**still need to fix so they have to choose at least one)
  var lowerCase = window.confirm("Would you like your password to include lowercase letters?");
  if (lowerCase == true) {
    lowerCase = "- Lowercase \n";
  } else {
    lowerCase = "";
  }
  
  var upperCase = window.confirm("Would you like your password to include uppercase letters?");
  if (upperCase == true) {
    upperCase = "- Uppercase \n";
  } else {
    upperCase = "";
  }

  var numbers = window.confirm("Would you like your password to include numbers?");
  if (numbers == true) {
    numbers = "- Numbers \n";
  } else {
    numbers = "";
  }

  var specialCharacters = window.confirm("Would you like your password to include special characters?");
  if (specialCharacters == true) {
    specialCharacters = "- Special characters \n";
  } else {
    specialCharacters = "";
  }

  if (lowerCase == false && upperCase == false && numbers == false && specialCharacters == false) {
    window.alert("You must select at least one character type.  Please try again.")
    return generatePassword();
  } 
  
  var passwordConfirm = window.confirm("You have chosen a password length of " + passwordLength + " and the following character type(s): " + '\n' + lowerCase + upperCase + numbers + specialCharacters + "Is this correct?");
  if (passwordConfirm == false) {
    return generatePassword();
  }

  // for (var i = passwordLength; i <= passwordLength; i++) {
  //   return Math.floor(Math.random() * passwordLength);
  // }
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