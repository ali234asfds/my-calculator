// scripts.js
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString(); // استخدام eval لحساب النتيجة
    document.getElementById('display').value = currentInput;
  } catch (error) {
    document.getElementById('display').value = 'خطأ';
    currentInput = '';
  }
}
