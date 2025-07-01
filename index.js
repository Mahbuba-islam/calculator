 let existingValue = ''
 let currentValue = ''
 const buttons = document.querySelectorAll('.button')
 const equal = document.getElementById('equal')
 const clear = document.getElementById('clear')
 const outPut = document.getElementById('outPut')

 buttons.forEach(b => {
  b.addEventListener('click', (e) => {
   currentValue = e.target.innerText
   existingValue = existingValue+currentValue 
   outPut.innerText = existingValue
  })
 })
  
//  equal
equal.addEventListener('click', () => {
  const result = eval(existingValue)
  outPut.innerText = result
  
})

// clear
clear.addEventListener('click', () => {
  currentValue = ''
  existingValue = ''
  outPut.innerText = ''
})







// let expression = "";

// const addition = () => {
//   const buttons = document.querySelectorAll('.kbd');
//   const outPut = document.getElementById('outPut');
//   const equal = document.getElementById('equal');
//   const clear = document.getElementById('clear'); // optional clear button

//   // 🟨 Handle number/operator clicks
//   buttons.forEach(b => {
//     b.addEventListener('click', (e) => {
//       const buttonValue = e.target.innerText;
//       expression += buttonValue;
//       outPut.innerHTML = expression;
//     });
//   });

//   // 🟦 Handle "="
//   equal.addEventListener('click', () => {
//     try {
//       const result = eval(expression); // use with caution!
//       outPut.innerHTML = result;
//       expression = result.toString(); // reset expression to result
//     } catch {
//       outPut.innerHTML = "Error";
//       expression = "";
//     }
//   });

//   // 🟥 Handle "C" (Clear)
//   if (clear) {
//     clear.addEventListener('click', () => {
//       expression = "";
//       outPut.innerHTML = "";
//     });
//   }
// };

// addition();


// another way
// let currentNumber = ''
// let previousNumber = ''
// let operator = ''

// const outPut = document.getElementById('outPut')
// const buttons = document.querySelectorAll('.button')
// const clear = document.getElementById('clear')
// const equal = document.getElementById('equal')

// buttons.forEach(b => {
//   b.addEventListener('click', (e) => {
//     const value = e.target.innerText
//     // previousNumber = value
//     // outPut.innerText = previousNumber
//     if(['+','-', '*' ,'/'].includes(value)){
//      operator = value
//      previousNumber = currentNumber
//      currentNumber = ''
//      outPut.innerText = previousNumber + "" + operator
//     }
//     else{
//        currentNumber += value
       
//     }  
//     if(operator){
//       outPut.innerText = previousNumber + "" + operator + "" + currentNumber
//     }
//     else{
//       outPut.innerText = currentNumber
//     }

//   })
// })

// // clear the calculator
// clear.addEventListener('click', () => {
//  previousNumber = ''
//   currentNumber = ''
//   operator.innerText = ''
//    outPut.innerText =''
// })

// equal.addEventListener('click', () => {
//   const num1 = Number(previousNumber)
//   const num2 = Number(currentNumber)
//   let result = 0

//   if(operator === '+'){
//     result = num1+num2
//   }
//   else if(operator === '-'){
//     result = num1-num2
//   }
//   else if(operator === '*'){
//     result = num1*num2
//   }
//   else if(operator === '/'){
//    num2 !==0 ? num1/num2 : 'error'
//   }
//   outPut.innerText = result

//   if(result === 'error'){
//   outPut.style.color = 'red'
// }
// else{
//   outPut.style.color = ''
// }

// // reset store to prepare new calculation
// currentNumber = result.toString()
// previousNumber = ''
// operator = ''

// })










