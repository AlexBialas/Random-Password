const passwordBox = document.getElementById("password");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const lowerCase = "abcdefghijklmnoprstuvwxyz";
const number = "0123456789";
const symbols = "!§$%&/()=?*':;_-$$]{},.><|@";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  passwordBox.value = password;
}

function copyToClipboard() {
  passwordBox.select();
  passwordBox.setSelectionRange(0, 99999);

  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => {
      alert("Coppied!");
    })
    .catch((err) => {
      console.error("Error", err);
    });
}
