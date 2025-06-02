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
