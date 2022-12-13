// Assignment Code
var generateBtn = document.querySelector("#generate");

// My code added to the top. Creates variables for password

var charString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+"];

var userInput = [];

var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   


  passwordText.value = password;

}
// Function and parameters added to generate the password and prompts for the criteria

function generatePassword() {
    var characterLength = 0
    while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === false) {
        characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"));
    }

    var upper = false
    var lower = false
    var number = false
    var symbol = false

    while (!upper && !lower && !number && !symbol) {

        
        upper = confirm("Click OK to confirm uppercase characters");

        
        lower = confirm("Click OK to confirm lowercase characters");

        
        number = confirm("Click OK to confirm numeric characters");

        
        symbol = confirm("Click OK to confirm special characters (~!@#$%^&*()-_=+)");
    }

    
    if (upper) {
        userInput.push(charString[0]);
    }

    if (lower) {
        userInput.push(charString[1])
    }

    if (number) {
        userInput.push(charString[2])
    }

    if (symbol) {
        userInput.push(charString[3])
    }

    var password = "";

    
    userInput = userInput.join("").split("");

    
    for (var i = 0; i < characterLength; i++) {
     
        var index = (Math.floor(Math.random() * userInput.length));
        password = password + userInput[index]
    }

    return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











