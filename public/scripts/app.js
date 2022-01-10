// Client facing scripts here
// DOM element

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

console.log(document.getElementById("generate"));
// console.log(document.getElementById("generate.addEventListener"));
document.getElementById("generate").addEventListener("click", function () {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  console.log("HELLO WORLD", resultEl);
  const passwordGenerate = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
  console.log(passwordGenerate);
  resultEl.value = passwordGenerate;
});
document.getElementById("copy").addEventListener("click", function () {
  // clipboard.addEventListener("click", () => {
  const textarea = document.createElement("copy");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

// console.log(document.getElementById("generate"));
document.getElementById("generate").onclick = function () {
  // const length = +lengthEl.value;
  // const hasLower = lowercaseEl.checked;
  // const hasUpper = uppercaseEl.checked;
  // const hasNumber = numbersEl.checked;
  // const hasSymbol = symbolsEl.checked;
  // console.log("HELLO WORLD", resultEl);
  // resultEl.innerText = generatePassword(
  //   hasLower,
  //   hasUpper,
  //   hasNumber,
  //   hasSymbol,
  //   length
  // );
};

//Generate password for a user
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  // Doesn't have a selected type
  if (typesCount === 0) {
    return "";
  }
  // console.log(randomFunc);
  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      // generatedPassword += randomFunc[funcName]();
      if ("lower" === funcName) {
        generatedPassword += getRandomLower();
      } else if ("upper" === funcName) {
        generatedPassword += getRandomUpper();
      } else if ("number" === funcName) {
        generatedPassword += getRandomNumber();
      } else if ("symbol" === funcName) {
        generatedPassword += getRandomSymbol();
      }
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}
