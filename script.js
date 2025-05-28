let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetDisplay = false;

const mainDisplay = document.getElementById('main-display');
const secondaryDisplay = document.getElementById('secondary-display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleButtons(button);
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 100);
  });
});

document.addEventListener('keydown', e => {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === '.') appendDecimal();
  if (['+', '-', '*', '/'].includes(e.key)) handleOperator(e.key);
  if (e.key === 'Enter' || e.key === '=') evaluate();
  if (e.key === 'Backspace') deleteNumber();
  if (e.key === 'Escape') clear();
});

function handleButtons(button) {
  const value = button.textContent;
  const action = button.dataset.action;

  if (!isNaN(value) || value === '00') appendNumber(value);
  else if (action === '.') appendDecimal();
  else if (action === 'clear') clear();
  else if (action === 'delete') deleteNumber();
  else if (action === 'percent') percent();
  else if (action === '=') evaluate();
  else handleOperator(action);
}

function appendNumber(num) {
  if (mainDisplay.textContent === '0' || shouldResetDisplay) {
    mainDisplay.textContent = num;
    shouldResetDisplay = false;
  } else if (mainDisplay.textContent.length < 12) {
    mainDisplay.textContent += num;
  }
}

function appendDecimal() {
  if (shouldResetDisplay) resetDisplay();
  if (!mainDisplay.textContent.includes('.')) {
    mainDisplay.textContent += '.';
  }
}

function clear() {
  mainDisplay.textContent = '0';
  secondaryDisplay.textContent = '';
  firstOperand = '';
  secondOperand = '';
  currentOperator = null;
  shouldResetDisplay = false;
}

function deleteNumber() {
  mainDisplay.textContent = mainDisplay.textContent.slice(0, -1) || '0';
}

function resetDisplay() {
  mainDisplay.textContent = '0';
  shouldResetDisplay = false;
}

function handleOperator(operator) {
  if (currentOperator !== null && !shouldResetDisplay) {
    evaluate();
  }
  firstOperand = mainDisplay.textContent;
  currentOperator = operator;
  shouldResetDisplay = true;
  secondaryDisplay.textContent = `${firstOperand} ${currentOperator}`;
}

function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;

  secondOperand = mainDisplay.textContent;
  const result = operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand));
  mainDisplay.textContent = result;
  secondaryDisplay.textContent = `${firstOperand} ${currentOperator} ${secondOperand}`;
  firstOperand = result;
  currentOperator = null;
  shouldResetDisplay = true;
}

function operate(operator, a, b) {
  if (operator === '/' && b === 0) {
    alert("Can't divide by 0");
    return 'Error';
  }

  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
  };

  const result = operations[operator](a, b);
  return Math.round(result * 10000) / 10000;
}

function percent() {
  mainDisplay.textContent = parseFloat(mainDisplay.textContent) / 100;
}
