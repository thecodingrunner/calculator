// Refer to display in html document.
const display = document.querySelector('.display')

display.textContent = '';

// Define variables for operator, the first and second numbers.
let op;
let a;
let b;



Node,addEventListener('keydown', (event) => {
  switch (event.key) {
    case '+':
      operators('+');
      break;
    case '-':
      operators('-');
      break;
    case '*':
      operators('*')
      break;
    case '/':
      operators('/')
      break;
    case '1':
      numbers(1);
      break;
    case '2':
      numbers(2);
      break;
    case '3':
      numbers(3);
      break;
    case '4':
      numbers(4);
      break;
    case '5':
      numbers(5);
      break;
    case '6':
      numbers(6);
      break;
    case '7':
      numbers(7);
      break;
    case '8':
      numbers(8);
      break;
    case '9':
      numbers(9);
      break;
    case '0':
      numbers(0);
      break;
    case '=':
      equals();
      break;
    case 'Enter':
      equals();
      break;
    case 'c': 
      display.textContent = '';
      a = undefined;
      op = undefined;
      b = undefined;
      break;
    case '.':
      numbers('.');
      break;
    case 'Backspace':
      backspace();
  }
});


// Function for each number. Based on whether each item already exists, add to the expression appropriately.
function numbers(number) {
  if (!op) {
    if (number === '.') {
      (!a) ? a = number : a = (a.toString() + (number).toString());
    } else {
      (!a) ? a = number : a = parseFloat(a.toString() + (number).toString());
    }
  } else {
    if (number === '.') {
      (!b) ? b = number : b = (b.toString() + (number).toString());
    } else {
      (!b) ? b = number : b = parseFloat(b.toString() + (number).toString());
    }
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

function equals() {
  display.textContent = '';
  let answer = operate(a, op, b);
  display.textContent = +answer.toFixed(3);
  a = answer;
  b = undefined;
  op = undefined;
}

function backspace() {
  if (a && !op && !b) {
    display.textContent = display.textContent.replace(a.toString(), '')
    a = undefined;
  } else if (a && op && !b) {
    display.textContent = display.textContent.replace(op.toString(), '')
    op = undefined;
  } else if (a && op && b) {
    display.textContent = display.textContent.replace(b.toString(), '')
    b = undefined;
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
      equals();
      break;
    case 'clear': 
      display.textContent = '';
      a = undefined;
      op = undefined;
      b = undefined;
      break;
    case 'decimal':
      numbers('.');
      break;
    case 'backspace':
      backspace();
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

