# calculator

A basic calculator built with **HTML**, **CSS**, and **JavaScript**. This project supports all basic arithmetic operations, handles edge cases like divide-by-zero, and includes additional features such as decimal input, clear/reset functionality, backspace support, and keyboard interaction.

---

## 🚀 Features

- ✅ **Basic Math Operations**: Addition, Subtraction, Multiplication, Division
- 🔁 **Chained Operations**: Supports continuous calculations like `12 + 7 - 5`
- 🧠 **Edge Case Handling**:
  - Snarky error message on divide-by-zero
  - Only evaluates when two numbers and an operator are entered
- 🧹 **Clear & Reset**: Reset calculator to default state
- 🔙 **Backspace Support**: Delete last input digit
- 🧮 **Decimal Input**: Allows decimal numbers; restricts multiple decimals
- ⌨️ **Keyboard Support**: Full interaction via keyboard input
- 📱 **Responsive Layout**: Works well on desktop and mobile screens
- 🎯 **Rounded Results**: Limits decimals to 4 places to avoid overflow

---

## 📁 Project Structure

/js-calculator
├── index.html # Calculator UI
├── style.css # Styling for calculator
├── script.js # Functionality and logic
└── README.md # Project documentation

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

git clone https://github.com/Theotown/Calculator.git
cd Calculator

### 2. Run the Calculator

Open the index.html file in your browser:

# macOS
open index.html

# Windows
start index.html

## 🎉 Usage

Click or press number keys to enter digits

Use +, -, *, or / for operations

Press = or Enter to calculate

Press C or click the Clear button to reset

Use Backspace or ⌫ to remove the last digit

Use . for decimal numbers (only one decimal allowed per number)

## 🛠️ Technologies Used

HTML – Markup structure

CSS – Styling and layout

JavaScript – Calculator logic and interactivity

## 📌 To-Do (Future Improvements)
Add parentheses support for complex expressions

Add a history log for past calculations

Implement dark/light theme toggle

## 🙌 Acknowledgments
Thanks to the open-source community for helpful references and ideas.
Inspired by The Odin Project curriculum.