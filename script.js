const add = document.querySelector('.add')
const subtract = document.querySelector('.subtract')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const button = document.querySelector('button')

const display = document.querySelector('.display')

display.textContent = '';

let op;
let a;
let b;
// add.addEventListener("click", () => {
//   display.textContent = '+';
// });

document.addEventListener("click", (event) => {
//  if (a === undefined || op === undefined || b === undefined) {
  switch (event.target.id) {
    case 'add':
      display.textContent += '+';
      op = '+';
      break;
    case 'subtract':
      display.textContent += '-';
      op = '-';
      break;
    case 'multiply':
      display.textContent += '*';
      op = '*';
      break;
    case 'divide':
      display.textContent += '/';
      op = '/';
      break;
    case 'one':
      (display.textContent == '') ? a = 1 : b = 1;
      display.textContent += '1'
      break;
    case 'two':
      (display.textContent == '') ? a = 2 : b = 2;
      display.textContent += '2'
      break;
    case 'three':
      (display.textContent == '') ? a = 3 : b = 3;
      display.textContent += '3'
      break;
    case 'four':
      (display.textContent == '') ? a = 4 : b = 4;
      display.textContent += '4'
      break;
    case 'five':
      (display.textContent == '') ? a = 5 : b = 5;
      display.textContent += '5'
      break;
    case 'six':
      (display.textContent == '') ? a = 6 : b = 6;
      display.textContent += '6'
      break;
    case 'seven':
      (display.textContent == '') ? a = 7 : b = 7;
      display.textContent += '7'
      break;
    case 'eight':
      (display.textContent == '') ? a = 8 : b = 8;
      display.textContent += '8'
      break;
    case 'nine':
      (display.textContent == '') ? a = 9 : b = 9;
      display.textContent += '9'
      break;
    case 'zero':
      (display.textContent == '') ? a = 0 : b = 0;
      display.textContent += '0'
      break;
    case 'equals':
      display.textContent = '';
      let answer = operate(a, op, b);
      display.textContent = answer;
      a = answer;
      break;
    case 'clear': 
      display.textContent = '';
      break;
  }
if (a !== undefined && op !== undefined && b !== undefined) {
  display.textContent = '';
  let answer = operate(a, op, b);
  display.textContent = answer;
  a = answer;
}
});


function operate(a, op, b) {
  if (op === '+') {
    return a + b
  } else if (op === '-') {
    return a - b
  } else if (op === '*') {
    return a * b
  } else if (op === '/') {
    return a / b
  };
};

