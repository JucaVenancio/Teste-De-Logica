alert("Welcome to our game the secret number!");
let maxNumber = 500;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber);
let inputAttempt;
let contAttempt = 1;

while (inputAttempt != secretNumber) {

    inputAttempt = prompt(`Choose a number between 1 and ${maxNumber}:`);

    if (inputAttempt == secretNumber) {
        break;
    } else {

        if (inputAttempt > secretNumber) {
            alert(`The secret number a smaller [${inputAttempt}]`);
        } else {

            alert(`The secret number a bigger [${inputAttempt}]`);
        }
    }

    contAttempt++;
}

let wordAttempt = contAttempt > 1 ? "attempts" : "attempt";

alert(`Congratulations you find the secret number (${secretNumber}) with (${contAttempt}) ${wordAttempt}!!!`);