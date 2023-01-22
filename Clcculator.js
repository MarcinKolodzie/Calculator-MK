const numbers = document.querySelectorAll('.calc__button--number')
const outputResult = document.querySelector('.calc__result')
const operators = document.querySelectorAll('.calc__button--operatorMark ')
const equal = document.querySelector('.calc__button--equal')
const OFFButton = document.querySelector('.calc__button--OFF')
const clearEntry = document.querySelector('.calc__button--clearEntry')
const clear = document.querySelector('.calc__button--clear')
const dot = document.querySelector('.calc__button--dot')

let currenRresult = ''
let number = 0
let operator = null

const add = (a, b) => {
  return a + b
}
const subtract = (a, b) => {
  return a - b
}
const divide = (a, b) => {
  return a / b
}
const multiply = (a, b) => {
  return a * b
}

const makeCount = () => {
  switch (operator) {
    case '+': currenRresult = add(Number(number), Number(currenRresult))
      break;
    case '-': currenRresult = subtract(Number(number), Number(currenRresult))
      break;
    case '/': currenRresult = divide(Number(number), Number(currenRresult))
      break;
    case '*': currenRresult = multiply(Number(number), Number(currenRresult))
      break;
    default:
      return
  }
}