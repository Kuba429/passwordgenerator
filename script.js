const passwordLength = document.getElementById("length-value");
const sliderLength = document.getElementById("passwordLength");
const passwordDisplay = document.getElementById("passwordDisplay");
const lowerCaseCheckbox = document.getElementById("lowerCase");
const upperCaseCheckbox = document.getElementById("upperCase");
const numbersCheckbox = document.getElementById("numbers");
const specialCheckbox = document.getElementById("specialCharacters");
const lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ["!", "@", "#", "$", "%", "&", "*", "?", "/", "+", "-", "_"];
var upperCaseCharacters = [];
var selected = [];
if (selected.length < 1) {
  selected = [lowerCaseCharacters];
  lowerCaseCheckbox.checked = true;
}
for (char in lowerCaseCharacters) {
  upperCaseCharacters.push(lowerCaseCharacters[char].toUpperCase());
}
function selection(choice) {
  selected = [];
  if (lowerCaseCheckbox.checked === true) {
    selected.push(lowerCaseCharacters);
  }
  if (upperCaseCheckbox.checked === true) {
    selected.push(upperCaseCharacters);
  }
  if (numbersCheckbox.checked === true) {
    selected.push(numbers);
  }
  if (specialCheckbox.checked === true) {
    selected.push(special);
  }
}

function passwordGeneration(length) {
  var password = "";
  var chosen = [];
  for (let j = 0; j < selected.length; j++) {
    chosen = chosen.concat(selected[j]);
  }

  for (let i = 0; i < length; i++) {
    password = password + chosen[Math.floor(Math.random() * chosen.length)];
  }
  passwordDisplay.value = password;
  passwordDisplay.style.width = (passwordDisplay.value.length + 2) * 8 + "px";
  console.log(password);
}
function sliderValueUpdate() {
  passwordLength.innerText = sliderLength.value;
}
onload = sliderValueUpdate();
