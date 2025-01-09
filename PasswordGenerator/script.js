const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

// clipboardEl.addEventListener("click", () => {
//     const textarea = document.createElement("textarea");
//     const password = resultEl.innerText;
//     if (!password) {
//         return;
//     }
//     textarea.value = password;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand("copy");
//     textarea.remove();
//     alert("Password copied to clipboard!");
// });

//document.execCommand() method is deprecated
clipboardEl.addEventListener("click", () => {
    const password = resultEl.innerText;
    if (!password) {
        return;
    }
    navigator.clipboard
        .writeText(password)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch((err) => {
            console.error("Failed to copy: ", err);
        });
});

generateEl.addEventListener("click", () => {
    // add + to parse to a number
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbols,
};

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        (item) => Object.values(item)[0]
    );

    // Return an empty string if no types are selected
    if (typesCount === 0) {
        return "";
    }

    // Generate the password
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach((type) => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    // Ensure the password is the correct length
    const finalPassword = generatedPassword.slice(0, length);

    // Shuffle the final password to avoid predictable patterns
    return shuffleString(finalPassword);
}

// Helper function to shuffle a string
function shuffleString(str) {
    const arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
}

// 97 - is ascii code for 'a'
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//65 - is ascii code for 'A'
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//48 - is ascii code for '0'
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// function generatePassword(lower, upper, number, symbol, length) {
//     let generatedPassword = "";
//     const typesCount = lower + upper + number + symbol;
//     const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
//         (item) => Object.values(item)[0] //get the values array and get first and only element
//     );

//     if (typesCount === 0) {
//         return "";
//     }

//     for (let i = 0; i < length; i += typesCount) {
//         typesArr.forEach((type) => {
//             const funName = Object.keys(type)[0];
//             generatedPassword += randomFunc[funName]();
//         });
//     }

//     const finalPassword = generatedPassword.slice(0, length);
//     return finalPassword;
// }

/*
//this function generates random type at any position
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        (item) => Object.values(item)[0] //get the values array and get first and only element
    );

    if (typesCount === 0) {
        return "";
    }

    for (let i = 0; i < length; i++) {
        const randTypeName =
            typesArr[Math.floor(Math.random() * typesArr.length)];
        const funcName = Object.keys(randTypeName)[0];
        // console.log(Object.keys(randTypeName)[0]);
        generatedPassword += randomFunc[funcName]();
    }

    const finalPassword = generatedPassword;
    return finalPassword;
}
    */
