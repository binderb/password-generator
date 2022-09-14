// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// ---------------------
// Generate password
// ---------------------
function generatePassword() {
  // Gather criteria from the user
  var length_criteria_satisfied = false;
  while (!length_criteria_satisfied) {
    var minLength = parseInt(promptForCriterion("minLength"));
    var maxLength = parseInt(promptForCriterion("maxLength"));
    if (maxLength >= minLength) length_criteria_satisfied = true;
    else alert("Your specified maximum length is shorter than your specified minimum length. Please try again.");
  }
  var lowercaseChars,uppercaseChars,numericChars,specialChars = false;
  while (!lowercaseChars && !uppercaseChars && !numericChars && !specialChars) {
    lowercaseChars = promptForCriterion("lowercase");
    uppercaseChars = promptForCriterion("uppercase");
    numericChars = promptForCriterion("numeric");
    specialChars = promptForCriterion("special");
    if (!lowercaseChars && !uppercaseChars && !numericChars && !specialChars) {
      alert("You must include one of the four possible types of characters.");
    }
  }

  // Determine the length of the password to be created.
  var lengthDiff = maxLength - minLength + 1;
  var passwordLength = minLength + Math.floor(Math.random() * lengthDiff);

  password = minLength + ' ' + maxLength + ' ' + lowercaseChars + ' ' + uppercaseChars + ' ' + numericChars + ' ' + specialChars + ' ' + lengthDiff + ' ' + passwordLength;
  return password;
}

// ---------------------
// Prompts for password criteria
// ---------------------
function promptForCriterion(criterion) {
  var user_value;
  var valid_entry = false;
  while (valid_entry === false) {
    switch (criterion) {
      case "minLength":
        user_value = prompt("Please enter a minimum character length:");
        if (user_value !== "" && parseInt(user_value) && parseInt(user_value) > 0) return user_value;
        else alert("Please enter a valid positive integer value.");
        break;
      case "maxLength":
        user_value = prompt("Please enter a maximum character length:");
        if (user_value !== "" && parseInt(user_value) && parseInt(user_value) > 0) return user_value;
        else alert("Please enter a valid positive integer value.");
        break;
      case "lowercase":
        user_value = confirm("Use lowercase characters?");
        return user_value;
        break;
      case "uppercase":
        user_value = confirm("Use uppercase characters?");
        return user_value;
        break;
      case "numeric":
        user_value = confirm("Use numeric characters?");
        return user_value;
        break;
      case "special":
        user_value = confirm("Use special characters?");
        return user_value;
        break;
      default:
        break;
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);