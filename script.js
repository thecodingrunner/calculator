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

// function numbers(number) {
//   if (!op) {
//     (!a) ? a = number : a = Number(a.toString() + (number).toString());
//   } else {
//     (!b) ? b = number : b = Number(b.toString() + (number).toString());
//   }
// }


document.addEventListener("click", (event) => {
//  if (a === undefined || op === undefined || b === undefined) {
  switch (event.target.id) {
    case 'add':
      if (a !== undefined && op !== undefined && b !== undefined) {
        display.textContent = '';
        let answer = operate(a, op, b);
        display.textContent = answer + '+';
        a = answer;
        b = undefined;
        op = '+';
      } else {
        display.textContent += '+';
        op = '+';
      }
      break;
    case 'subtract':
      if (a !== undefined && op !== undefined && b !== undefined) {
        display.textContent = '';
        let answer = operate(a, op, b);
        display.textContent = answer + '-';
        a = answer;
        b = undefined;
        op = '-';
      } else {
        display.textContent += '-';
        op = '-';
      }
      break;
    case 'multiply':
      if (a !== undefined && op !== undefined && b !== undefined) {
        display.textContent = '';
        let answer = operate(a, op, b);
        display.textContent = answer + '*';
        a = answer;
        b = undefined;
        op = '*';
      } else {
        display.textContent += '*';
        op = '*';
      }
      break;
    case 'divide':
      if (a !== undefined && op !== undefined && b !== undefined) {
        display.textContent = '';
        let answer = operate(a, op, b);
        display.textContent = answer + '/';
        a = answer;
        b = undefined;
        op = '/';
      } else {
        display.textContent += '/';
        op = '/';
      }
      break;
    case 'one':
      if (!op) {
        (!a) ? a = 1 : a = Number(a.toString() + (1).toString());
      } else {
        (!b) ? b = 1 : b = Number(b.toString() + (1).toString());
      }
      display.textContent += '1'
      break;
    case 'two':
      if (!op) {
        (!a) ? a = 2 : a = Number(a.toString() + (2).toString());
      } else {
        (!b) ? b = 2 : b = Number(b.toString() + (2).toString());
      }
      display.textContent += '2';
      break;
    case 'three':
      if (!op) {
        (!a) ? a = 3 : a = Number(a.toString() + (3).toString());
      } else {
        (!b) ? b = 3 : b = Number(b.toString() + (3).toString());
      }
      display.textContent += '3'
      break;
    case 'four':
      if (!op) {
        (!a) ? a = 4 : a = Number(a.toString() + (4).toString());
      } else {
        (!b) ? b = 4 : b = Number(b.toString() + (4).toString());
      }
      display.textContent += '4'
      break;
    case 'five':
      if (!op) {
        (!a) ? a = 5 : a = Number(a.toString() + (5).toString());
      } else {
        (!b) ? b = 5 : b = Number(b.toString() + (5).toString());
      }
      display.textContent += '5'
      break;
    case 'six':
      if (!op) {
        (!a) ? a = 6 : a = Number(a.toString() + (6).toString());
      } else {
        (!b) ? b = 6 : b = Number(b.toString() + (6).toString());
      }
      display.textContent += '6'
      break;
    case 'seven':
      if (!op) {
        (!a) ? a = 7 : a = Number(a.toString() + (7).toString());
      } else {
        (!b) ? b = 7 : b = Number(b.toString() + (7).toString());
      }
      display.textContent += '7'
      break;
    case 'eight':
      if (!op) {
        (!a) ? a = 8 : a = Number(a.toString() + (8).toString());
      } else {
        (!b) ? b = 8 : b = Number(b.toString() + (8).toString());
      }
      display.textContent += '8'
      break;
    case 'nine':
      if (!op) {
        (!a) ? a = 9 : a = Number(a.toString() + (9).toString());
      } else {
        (!b) ? b = 9 : b = Number(b.toString() + (9).toString());
      }
      display.textContent += '9'
      break;
    case 'zero':
      if (!op) {
        (!a) ? a = 0 : a = Number(a.toString() + (0).toString());
      } else {
        (!b) ? b = 0 : b = Number(b.toString() + (0).toString());
      }
      display.textContent += '0'
      break;
    case 'equals':
      display.textContent = '';
      let answer = operate(a, op, b);
      display.textContent = answer;
      a = answer;
      b = undefined;
      op = undefined;
      break;
    case 'clear': 
      display.textContent = '';
      a = undefined;
      op = undefined;
      b = undefined;
      break;
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