// switch

let expression = 'c'
switch (expression) {
    case 'a': 
      // codigo
      console.log('a')
      break // se tirar o break ele segue e mostra os outros casos
    case 'b':
      //codigo para expressao b
      console.log('b')
      break
    default:
      console.log('default')
      break
}

//Ex.:

function calculate(number1, operator, number2) {
  let result

  switch (operator) {
    case '+':
      result = number1 + number2
        break
    case '-':
      result = number1 - number2
        break
    case '*':
      result = number1 * number2
        break
    case '/':
      result = number1 / number2
        break
    default:
        console.log('não implementado')
  }

  return result
}

console.log(calculate(4, '/', 8))