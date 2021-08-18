function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4)
    {
        return pin;
    }
    else
    {
        return getPin();
    }
}

function generatePin() {
    const gotPin = getPin();
    document.getElementById('display-pin').value = gotPin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if (isNaN(numbers))
    {
        if (numbers == 'C')
        {
            calc.value = '';
        }
        
    }
    else
    {
         const previouscalc = calc.value;
         const newCals = previouscalc + numbers;
         calc.value = newCals;
    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typeValue = document.getElementById('typed-numbers').value
    const failed = document.getElementById('notify-fail');
    const suceess = document.getElementById('notify-done');
    if (pin == typeValue)
    {
        suceess.style.display = 'block';
        failed.style.display='none'
    } else
    {
        failed.style.display = 'block';
        suceess.style.display = 'none';
    }
}



























// function getPin() {
//     const pin = Math.round(Math.random() * 10000);
//     const pinString = pin + '';
//     if (pinString.length == 4)
//     {
//         return pin;
//     }
//     else
//     {
//         return getPin();
//     }

// }


// function generatePin() {
//     const gotpin = getPin()
//     document.getElementById('display-pin').value = gotpin;
// }


// document.getElementById('key-pad').addEventListener('click', function (event) {
//     const number = event.target.innerText;
//     const calc = document.getElementById('typed-numbers');
//     if (isNaN(number))
//     {
//         if (number == 'C')
//         {
//             calc.value = '';
//         }
//     }
//     else
//     {
    

//         const previouscalc = calc.value;
//         const numCalc = previouscalc + number;
//         calc.value = numCalc;
//     }
    
// });


// function verifyPin() {
//     const pin = document.getElementById('display-pin').value;
//     const typedNumber = document.getElementById('typed-numbers').value;
//     const notifyDone = document.getElementById('notify-done');
//     const failError = document.getElementById('notify-fail');
//     if (pin == typedNumber)
//     {
       
//         notifyDone.style.display = 'block';
//         failError.style.display = 'none';
//     }
//     else
//     {
//         notifyDone.style.display = 'none';
//         failError.style.display = 'block';

//     }
// }