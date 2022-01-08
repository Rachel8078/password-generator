// Assignment code here
var characters = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "012345679",
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
};

// all selected characters will end up in this array
var included = [];





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
  console.log("Building random password as a string");
  console.log(included);
  console.log(characters.lower);
    if (lower == "- Lowercase \n") {
      console.log("Adding lowercases");
      var lowerCase = characters.lower.split('');
      console.log(lowerCase);
      included = included.concat(lowerCase);
      console.log(included);
   }; 
console.log(included);
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
  
  
 
  console.log(included);
  // var getKey = 
  // function lowerCase() {
  //   return included.lower[Math.floor(Math.random() * included.lower.length)];
  // };
  // function upperCase() {
  //   return included.upper[Math.floor(Math.random() * included.upper.length)];
  // };
  // function incNumbers() {
  //   return included.numbers[Math.floor(Math.random() * included.numbers.length)];
  // };
  // function specialCharacters() {
  //   return included.symbols[Math.floor(Math.random() * included.symbols.length)];
  // }
// console.log(getKey);


// // generate random passwod based on characters and length selected
// var passwordText = '';

// // this runs for the number of times I choose for password length.  How to I get this to be applied to how many times it chooses a random character for me?
var passwordText = "";
for (var i = 0; i < length; i++) {
passwordText = passwordText.concat(included[Math.floor(Math.random() * included.length)]);
// included.push(getKey);
}
console.log(passwordText);
// console.log(getKey);
// // this will get a random item from my designated array to show up in the box.  How to I get it to choose a random character from each item in the array until the length is met?


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