var generateBtn = document.querySelector("#generate");

// Function to prompt user for password criteria and generate password
function generatePassword() {
  // Character sets to use for password generation
  var charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_+-={}[]|:;',.?/~`"
  };

  // Prompt user for password length
  var passLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
  
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Invalid password length! Please enter a number between 8 and 128.");
    return;
  }

  // Prompt user for character types to include in password
  var useLowercase = confirm("Include lowercase letters?");
  var useUppercase = confirm("Include uppercase letters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");

  // Make sure at least one character type is selected
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("You must select at least one character type!");
    return;
  }

  // Build character set based on user selections
  var charSet = "";
  if (useLowercase) {
    charSet += charSets.lowercase;
  }
  if (useUppercase) {
    charSet += charSets.uppercase;
  }
  if (useNumeric) {
    charSet += charSets.numeric;
  }
  if (useSpecial) {
    charSet += charSets.special;
  }

  // Generate password using selected character set and length
  var password = "";
  for (var i = 0; i < passLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);