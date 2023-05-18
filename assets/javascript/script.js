var generateBtn = document.querySelector("#generate");

// Function to prompt user for password criteria and generate password
function generatePassword() {
  // Create variables for each character set (lowercase, uppercase, numeric values, and special characters)
  var charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_+-=?"
  }

  // Prompt user for password length - parse is what I found on Google and made the most sense after reading the definition and use case for me. Because we need a specific password through 8 and 128, the parse will be able to read the string argument and notify the user through a prompt to put a number into the prompt that is between 8 and 128
  var passLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
  
  // isNaN means is not a number, which means that if the user puts in a letter or special character it will alert them based on the alert function
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Invalid password length! Please enter a number between 8 and 128.");
    return;
  }

  // Prompt user for character types to include in password
  var useLowercase = confirm("Do you want to include lowercase letters?");
  var useUppercase = confirm("Do you want to include UPPERCASE letters?");
  var useNumeric = confirm("Do you want to include number values?");
  var useSpecial = confirm("Do you want to include special characters?")

  // Make sure at least one character type is selected. Using ! in front of each means "not", so by including in front of all of them we're saying if a user does NOT input at least one of the four character types, an alert will show up saying that they need to use one.
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("Please select at least one character type!");
    return;
  }

  // Build character set based on user selections located on lines 23-26: If the user uses Lowercase than add Lowercase, if user uses Uppercase, than add Uppercase and so on. The += is the addition symbol to add these variables into the generator.
  var charSet = "";
    if (useLowercase) {
    charSet += charSets.lowercase;
  } if (useUppercase) {
    charSet += charSets.uppercase;
  } if (useNumeric) {
    charSet += charSets.numeric;
  } if (useSpecial) {
    charSet += charSets.special;
  }

  // Generate password using selected character set and length. Math.floor is rounding down to the nearest integer (which are whole numbers defined in the initial var Charsets) and math.random randomizes the var Charsets to generate a randomized password through the function on line 54
  var password = "";
    for (var i = 0; i < passLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  } return password;
}

// the below function takes all of the above into account and generates the password for the user
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);