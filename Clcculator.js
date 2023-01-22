const numbers = document.querySelectorAll('.calc__button--number')
const outputResult = document.querySelector('.calc__resultWindow')
const operators = document.querySelectorAll('.calc__button--operatorMark ')
const equal = document.querySelector('.calc__button--equal')
const OFFButton = document.querySelector('.calc__button--OFF')
const clearEntry = document.querySelector('.calc__button--clearEntry')
const clear = document.querySelector('.calc__button--clear')
const dot = document.querySelector('.calc__button--dot')

let currenRresult = ''
let number = 0
let operator = ''

const add = (a, b) => {
  console.log('a = ', a, 'b = ', b)
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

const concat = (symbol) => {
  currenRresult = currenRresult.toString() + symbol.toString()
  render()
}

const render = () => {
  outputResult.innerText = currenRresult
}

numbers.forEach((numberFromButton) => {
  numberFromButton.addEventListener(
    'click',
    () => {
      
        if(currenRresult === 0) {
          currenRresult = numberFromButton.innerText
          render()
          
        }
        console.log('before concat', numberFromButton.innerText)
        concat(numberFromButton.innerText)
        console.log('after', currenRresult)
    }
  )
})