// Assignment code here
var characters = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "012345679",
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
};

// all selected characters will end up in this array
var included = [];

// main fuction to determine user requirements and run password generator
function generatePassword() {
  //reset included array to empty
  included.length = 0;
  
  // determine password length
  var length = Number(window.prompt("Please choose a password length between 8 - 128 characters."));
  if (length < 8 || length > 128 || isNaN(length)) {
    return generatePassword();
  }
   
  // determine if lowercase will be used 
  var lower = window.confirm("Would you like your password to include lowercase letters?");
  if (lower === true) {
    lower = "- Lowercase \n";
    } else {
      lower = "";
  } 

  // determine if uppercase will be used
  var upper = window.confirm("Would you like your password to include uppercase letters?");
  if (upper === true) {
    upper = "- Uppercase \n";
  } else {
    upper = "";
  }

  // determine if numbers will be used
  var numbers = window.confirm("Would you like your password to include numbers?");
  if (numbers === true) {
    numbers = "- Numbers \n";
  } else {
    numbers = "";
  }

  // determine if special characters will be used
  var symbols = window.confirm("Would you like your password to include special characters?");
  if (symbols === true) {
    symbols = "- Special characters \n";
  } else {
    symbols = "";
  }

  // confirm user has made at least one character type selection
  if (lower == false && upper == false && numbers == false && symbols == false) {
    window.alert("You must select at least one character type.  Please try again.")
    return generatePassword();
  } 
  
  // confirm user selections are accurate
  var passwordConfirm = window.confirm("You have chosen a password length of " + length + " and the following character type(s): " + '\n' + lower + upper + numbers + symbols + "Is this correct?");
  if (passwordConfirm == false) {
    return generatePassword();
  } 

  // look to see which characters user wants in password
    if (lower == "- Lowercase \n") {
      var lowerCase = characters.lower.split('');
      included = included.concat(lowerCase);
   }; 
    if(upper == "- Uppercase \n") {
      var upperCase = characters.upper.split('');
      included = included.concat(upperCase);
  };
    if(numbers == "- Numbers \n") {
      var incNumbers = characters.numbers.split('');
      included = included.concat(incNumbers);
  };
    if(symbols == "- Special characters \n") {
      var specialCharacters = characters.symbols.split('');
      included = included.concat(specialCharacters);
  } 
  
  // use selected characters in random string to return password
  var passwordText = "";
  for (var i = 0; i < length; i++) {
  passwordText = passwordText.concat(included[Math.floor(Math.random() * included.length)]);
  }
  return passwordText;
};

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