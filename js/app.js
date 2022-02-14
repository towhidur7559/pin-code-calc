// function getPin() {
//     const pin = Math.round(Math.random() * 10000);
//     const pinString = pin + '';
//     if (pinString.length == 4) {
//         return pin;
//     }
//     else {
//         // console.log('got 3 digit and calling again', pin);
//         return getPin();
//     }
// }
// function generatePin() {
//     const pin = getPin();
//     document.getElementById('display-pin').value = pin;
// }

// document.getElementById('key-pad').addEventListener('click', function (event) {
//     const number = event.target.innerText;
//     const calcInput = document.getElementById('typed-numbers');
//     if (isNaN(number)) {
//         if (number == 'C') {
//             calcInput.value = '';
//         }
//     }
//     else {
//         const previousNumber = calcInput.value;
//         const newNumber = previousNumber + number;
//         calcInput.value = newNumber;
//     }
// });

// function verifyPin() {
//     const pin = document.getElementById('display-pin').value;
//     const typedNumbers = document.getElementById('typed-numbers').value;
//     const successMessage = document.getElementById('notify-success');
//     const failError = document.getElementById('notify-fail');
//     if (pin == typedNumbers) {
//         successMessage.style.display = 'block';
//         failError.style.display = 'none';
//     }
//     else {
//         successMessage.style.display = 'none';
//         failError.style.display = 'block';
//     }
// }





// -----My Work----
function getPin() {
    const pin = Math.round(Math.random() * 100000);
    const pinString = pin + ' ';
    if (pinString.length == 5) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'c') {
            calcInput.value = ' ';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
   
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        // console.log('hello');
        // const successMessage = document.getElementById('notify-success');
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        // const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
        successMessage.style.display = 'none';
        // console.log('opps!');
    }
}

