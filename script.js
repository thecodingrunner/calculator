// Refer to display in html document.
const display = document.querySelector('.display')

display.textContent = '';

// Define variables for operator, the first and second numbers.
let op;
let a;
let b;


// Function for each number. Based on whether each item already exists, add to the expression appropriately.
function numbers(number) {
  if (!op) {
    (!a) ? a = number : a = Number(a.toString() + (number).toString());
  } else {
    (!b) ? b = number : b = Number(b.toString() + (number).toString());
  }
  display.textContent += number.toString()
}


// Function for each operator. If a, op, and b are already stored the answer will be calculated, otherwise 
// continue expression
function operators(operator) {
if (a !== undefined && op !== undefined && b !== undefined) {
  display.textContent = '';
  let answer = operate(a, op, b);
  display.textContent = +answer.toFixed(3) + operator;
  a = answer;
  b = undefined;
  op = operator;
} else {
  display.textContent += operator;
  op = operator;
}
}

document.addEventListener("click", (event) => {
//  if (a === undefined || op === undefined || b === undefined) {
  switch (event.target.id) {
    case 'add':
      operators('+');
      break;
    case 'subtract':
      operators('-');
      break;
    case 'multiply':
      operators('*')
      break;
    case 'divide':
      operators('/')
      break;
    case 'one':
      numbers(1);
      break;
    case 'two':
      numbers(2);
      break;
    case 'three':
      numbers(3);
      break;
    case 'four':
      numbers(4);
      break;
    case 'five':
      numbers(5);
      break;
    case 'six':
      numbers(6);
      break;
    case 'seven':
      numbers(7);
      break;
    case 'eight':
      numbers(8);
      break;
    case 'nine':
      numbers(9);
      break;
    case 'zero':
      numbers(0);
      break;
    case 'equals':
      display.textContent = '';
      let answer = operate(a, op, b);
      display.textContent = +answer.toFixed(3);
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

// Function that performs operations on the provided arguments. S
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