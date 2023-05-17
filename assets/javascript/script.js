// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var numb = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//ask for length of a password
  //prompt
  //save it to a variable
//check the length provided by user is a number and in between 8 and 128
  
//confirm : 4 for uppercase, lowercase, numbers, special characters
  // save it to a variable
//check if one of the  uppercase or lowercase or num or sp char is there
   // combine the confirmed arrays
// create an array for uppercase letters, lowercase letters....
//create an array variable to have a new password with length provided by user. []
//random item from combined array and push it to new password array and do this step up to the length of user input.