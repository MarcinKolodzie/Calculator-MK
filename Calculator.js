const numbers = document.querySelectorAll('.calc__button--number')
const outputResult = document.querySelector('.calc__resultWindow')
const operators = document.querySelectorAll('.calc__button--operatorMark ')
const equal = document.querySelector('.calc__button--equal')
const OFFButton = document.querySelector('.calc__button--OFF')
const clearEntry = document.querySelector('.calc__button--clearEntry')
const clear = document.querySelector('.calc__button--clear')
const dot = document.querySelector('.calc__button--dot')
const test = document.querySelector('.calc__button--test')

let partResult = 0
let number = 0
let operatorSign = null

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
  switch (operatorSign) {
    case '+': partResult = add((number), Number(partResult))
      break;
    case '-': partResult = subtract(Number(number), Number(partResult))
      break;
    case '/': partResult = divide(Number(number), Number(partResult))
      break;
    case '*': partResult = multiply(Number(number), Number(partResult))
      break;
    default:
      return
  }
}

const loadOperator = (operatorFromButton) => {
  operatorSign = operatorFromButton
}

const concat = (symbol) => {
  partResult = partResult.toString() + symbol.toString()
  render()
}

const render = () => {
  outputResult.innerText = partResult
}

numbers.forEach((numberFromButton) => {
  numberFromButton.addEventListener(
    'click',
    () => {
      if (partResult === '') return
      if (partResult === 0) {
        partResult = numberFromButton.innerText
        render()
        return
      }
      concat(numberFromButton.innerText)
    }
  )
})
operators.forEach((operatorFromButton) => {
  operatorFromButton.addEventListener(
    'click',
    () => {
      if(partResult === '') return
      makeCount()
      render()
      number = Number(partResult)
      partResult = 0
      operatorSign = null
      loadOperator(operatorFromButton.innerText)
    }
  )
})

equal.addEventListener(
  'click',
  () => {
    makeCount()
    operatorSign = '='
    render()
    number = 0
    operatorSign = null
  }
)

clearEntry.addEventListener(
  'click',
  () => {
    partResult = 0
    number = 0
    operatorSign = null
    render()
  }
)

// clear.addEventListener(
//   'click',
//   () => {
//     ['', 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(partResult){
//       partResult = 0
//       render()
//       return
//     }
//   }
//   if (partResult === 0) {
//   return
// }
// partResult = String(partResult).slice(0, -1)

// // usuwanie bez minusa
// if (partResult === '-' || partResult === '') {
//   render()
//   return
// }
// else {
//   partResult = Number(partResult)
// }
// render()
//   }
// )

dot.addEventListener(
  'click',
  () => {
    concat('.')
  }
)

const stopCalculator = () => {
  partResult = ''
  number = 0
  operatorSign = null
  render()
}

OFFButton.addEventListener(
  'click',
  () => stopCalculator()
)

test.addEventListener(
  'click',
  () => console.log(
    "partResult = ", partResult,
    "number = ", number,
    "operatorSign = ", operatorSign
  ))