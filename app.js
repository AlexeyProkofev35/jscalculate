// let num  = 42
// let firstName = 'Alexey'
// num = 10
// const isProgrammer = true

// firstName ='Andrey'

// Константу менять нельзя isProgrammer = false 

// let $ = 'test'

// let $max = 45
// let _ = 49
// let max$ = 43
// let first_name = 'Ivan'
// let myNum = 33
// let num42 = 30
// alert(firstName)
// console.log(num + 40)

// const fullName = firstName + ' Prokofev'
// console.log(fullName)
// console.log(fullName)
// console.log(fullName)
 

const resultElement = document.getElementById('result')
// console.log(resultElement)
const input1 = document.getElementById('exampleFormControlInput1')
const input2 = document.getElementById('input2')
let action = '+'
// let actionMultiply = '*'
// let actionDivision = '/'

const submitElement = document.getElementById('submit')



const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divisionBtn = document.getElementById('division')


plusBtn.onclick = function () {
action = '+'
}


minusBtn.onclick = function () {

    action = '-'
}

multiplyBtn.onclick = function () {
    action = '*'
    }

    divisionBtn.onclick = function () {
        action = '/'
        }


function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}



function computeNumbersWithAction(inp1, inp2, actionSimbol) {
const num1 = Number(inp1.value)
const num2 = Number(inp2.value)
if (actionSimbol == '+') {
   return num1 + num2
}
else if (actionSimbol == '-') {
  return  num1 - num2
}
else if (actionSimbol == '*') {
    return  num1 * num2
  }
  else if (actionSimbol == '/') {
    return  num1 / num2
  }
}



submitElement.onclick = function () {
const result = computeNumbersWithAction(input1, input2, action)
printResult(result)
}

    // if (action == '+') {
        // const sum = Number(input1.value) + Number(input2.value)
        // printResult(sum)
    // }

//    else if (action == '-') {
        // const sum = Number(input1.value) - Number(input2.value)
        // printResult(sum)

// }


