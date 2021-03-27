// Assignment Code
var generateBtn = document.querySelector("#generate");

const charAmountRange = document.getElementById("charAmountRange")
const charAmountNumber = document.getElementById("charAmountNumber")
const includeLowercaseElement = document.getElementById("includeLowercase")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")

charAmountRange.addEventListener('input', syncCharAmount)
charAmountNumber.addEventListener('input', syncCharAmount)

function syncCharAmount(e){
  const value = e.target.value
  charAmountNumber.value = value
  charAmountRange.value = value
}


const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122)
const NUM_CHAR_CODES = arrayFromLowtoHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(
  arrayFromLowtoHigh(58, 64)
).concat(
  arrayFromLowtoHigh(91,96)
).concat(
  arrayFromLowtoHigh(123, 126)
)

// Write password to the #password input
function writePassword() {
  const characterAmount = charAmountNumber.value;
  const includeLowercase = includeLowercaseElement.checked
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked

  const password = generatePassword(characterAmount, includeLowercase, 
    includeUppercase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(characterAmount, includeLowercase, includeUppercase, 
  includeNumbers, includeSymbols){
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUM_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  var characterAmount = charAmountNumber.value;
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++){
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('');
}

function arrayFromLowtoHigh(low, high){
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

