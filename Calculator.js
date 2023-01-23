(function () {
  const numbers = document.querySelectorAll('.calc__button--number')
  const outputResult = document.querySelector('.calc__resultWindow')
  const operators = document.querySelectorAll('.calc__button--operatorMark ')
  const equal = document.querySelector('.calc__button--equal')
  const OFFButton = document.querySelector('.calc__button--OFF')
  const clearEntry = document.querySelector('.calc__button--clearEntry')
  const clear = document.querySelector('.calc__button--clear')
  const dot = document.querySelector('.calc__button--dot')
  const test = document.querySelector('.calc__button--test')

  let partResultNS = 0
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
      case '+': partResultNS = add((number), Number(partResultNS))
        break;
      case '-': partResultNS = subtract(Number(number), Number(partResultNS))
        break;
      case '/': partResultNS = divide(Number(number), Number(partResultNS))
        break;
      case '*': partResultNS = multiply(Number(number), Number(partResultNS))
        break;
      default:
        return
    }
  }

  const loadOperator = (operatorFromButton) => {
    operatorSign = operatorFromButton
  }

  const concat = (symbol) => {
    partResultNS = partResultNS.toString() + symbol.toString()
    render()
  }

  const render = () => {
    outputResult.innerText = partResultNS
  }

  numbers.forEach((numberFromButton) => {
    numberFromButton.addEventListener(
      'click',
      () => {
        if (partResultNS === '') return
        if (partResultNS === 0) {
          partResultNS = numberFromButton.innerText
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
        if (partResultNS === '') return
        makeCount()
        render()
        number = Number(partResultNS)
        partResultNS = 0
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
      partResultNS = 0
      number = 0
      operatorSign = null
      render()
    }
  )

  clear.addEventListener(
    'click',
    () => {
      if (partResultNS === '' || partResultNS === '1' || partResultNS === '2' || partResultNS === '3' || partResultNS === '4' || partResultNS === '5' || partResultNS === '6' || partResultNS === '7' || partResultNS === '8' || partResultNS === '9' || partResultNS === '0') {
        partResultNS = 0
        render()
        return
      }
      if (partResultNS === 0) {
        return
      }
      partResultNS = String(partResultNS).slice(0, -1)

      if (partResultNS === '') {
        partResultNS = 0
        render()
        return
      }
      render()
    }
  )

  dot.addEventListener(
    'click',
    () => {
      partResultNS = partResultNS.toString()
      if (partResultNS === '') return
      else { if (partResultNS.includes('.')) return }

      concat('.')
    }
  )

  const stopCalculator = () => {
    partResultNS = ''
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
      "partResultNS = ", partResultNS,
      "number = ", number,
      "operatorSign = ", operatorSign
    ))
})()