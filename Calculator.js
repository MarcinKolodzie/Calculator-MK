(function () {

  // html functions - start
  const numbers = document.querySelectorAll('.calc__button--number')
  const outputResult = document.querySelector('.calc__resultWindow')
  const operators = document.querySelectorAll('.calc__button--operatorMark ')
  const equal = document.querySelector('.calc__button--equal')
  const OFFButton = document.querySelector('.calc__button--OFF')
  const clearEntry = document.querySelector('.calc__button--clearEntry')
  const clear = document.querySelector('.calc__button--clear')
  const dot = document.querySelector('.calc__button--dot')
  // const test = document.querySelector('.calc__button--test')
  // html functions - end

  // start state - start
  let partResultNS = ''
  let number = 0
  let operatorSign = null
  // start state - end


  // math functions - start
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
    switch (operatorSign) {
      case '+': (partResultNS = add((number), Number(partResultNS))).toPrecision(9)
        break;
      case '-': (partResultNS = subtract(Number(number), Number(partResultNS))).toPrecision(9)
        break;
      case '/': partResultNS = (divide(Number(number), Number(partResultNS))).toPrecision(9)
        break;
      case '*': partResultNS = (multiply(Number(number), Number(partResultNS))).toPrecision(9)
        break;
      default:
        return
    }
  }
  // math functions - end

  // rendering functions -start
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
  // rendering functions -end


  // button operations - start
  numbers.forEach((numberFromButton) => {
    numberFromButton.addEventListener(
      'click',
      () => {
        if (partResultNS === '') return
        if (partResultNS === 0 || partResultNS === '0') {
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
      if (operatorSign === '/' && (partResultNS === '0' || partResultNS === 0)) {
        partResultNS = 'ERROR don\'t divide by ZERO'
        render()
        partResultNS = ''
        return
      }
      else {
        makeCount()
        operatorSign = '='
        render()
        number = 0
        operatorSign = null
      }
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
  // button operations - end

  // test button - start
  // test.addEventListener(
  //   'click',
  //   () => console.log(
  //     "partResultNS = ", partResultNS,
  //     "number = ", number,
  //     "operatorSign = ", operatorSign
  //   ))
  // test button - end
})()