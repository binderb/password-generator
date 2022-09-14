// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ---------------------
// Generate password
// ---------------------
function generatePassword() {
  // Gather (and validate) criteria from the user.
  var length_criteria_satisfied = false;
  var chars = [false, false, false, false];
  while (!length_criteria_satisfied) {
    var minLength = parseInt(promptForCriterion("minLength"));
    var maxLength = parseInt(promptForCriterion("maxLength"));
    if (maxLength >= minLength) length_criteria_satisfied = true;
    else alert("Your specified maximum length is shorter than your specified minimum length. Please try again.");
  }
  while (!chars[0] && !chars[1] && !chars[2] && !chars[3]) {
    chars[0] = promptForCriterion("lowercase");
    chars[1] = promptForCriterion("uppercase");
    chars[2] = promptForCriterion("numeric");
    chars[3] = promptForCriterion("special");
    if (!chars[0] && !chars[1] && !chars[2] && !chars[3]) {
      alert("You must include one of the four possible types of characters.");
    }
  }

  // Determine the length of the password to be created.
  var lengthDiff = maxLength - minLength + 1;
  var passwordLength = minLength + Math.floor(Math.random() * lengthDiff);

  // Build the password according to user specifications.
  var characterPool = [];
  if (chars[0]) characterPool.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
  if (chars[1]) characterPool.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
  if (chars[2]) characterPool.push('0','1','2','3','4','5','6','7','8','9');
  if (chars[3]) characterPool.push(' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~');
  console.log(characterPool);
  var password = "";
  for (var i=0;i<passwordLength;i++) {
    // Pick a random character from the pool, and add it to the password string.
    var char_i = characterPool[Math.floor(Math.random() * characterPool.length)];
    password += char_i;
  }
  return password;
}

// ---------------------
// Prompt for password criteria
// ---------------------
function promptForCriterion(criterion) {
  // Infinite loop will be escaped when a valid value is given.
  while (true) {
    switch (criterion) {
      case "minLength":
        user_value = prompt("Please enter a minimum character length:");
        // Need to check this one to see if there is a valid integer of proper size in the user's input.
        if (user_value !== "" && parseInt(user_value) && parseInt(user_value) >= 8 && parseInt(user_value) <= 128) return user_value;
        else if (parseInt(user_value) && (parseInt(user_value) < 8 || parseInt(user_value) > 128)) alert("Please enter a value between 8 and 128.");
        else alert("Please enter a valid integer value.");
        break;
      case "maxLength":
        user_value = prompt("Please enter a maximum character length:");
        // Need to check this one to see if there is a valid integer of proper size in the user's input.
        if (user_value !== "" && parseInt(user_value) && parseInt(user_value) >= 8 && parseInt(user_value) <= 128) return user_value;
        else if (parseInt(user_value) && (parseInt(user_value) < 8 || parseInt(user_value) > 128)) alert("Please enter a value between 8 and 128.");
        else alert("Please enter a valid integer value.");
        break;
      case "lowercase":
        return confirm("Use lowercase characters?");
        break;
      case "uppercase":
        return confirm("Use uppercase characters?");
        break;
      case "numeric":
        return confirm("Use numeric characters?");
        break;
      case "special":
        return confirm("Use special characters?");
        break;
      default:
        break;
    }
  }
}