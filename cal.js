const buttons = document.querySelectorAll('.calc-btn');
const operations = document.getElementById('label');
const equals = document.getElementsByClassName('equals')[0];
const clear = document.getElementsByClassName('clear')[0];

// 96 + 4
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.dataset.value;
    const lastChar = operations.innerText.slice(-1);
    const operators = ["+", "-", "*", "/"];
    const isLastCharOperator = operators.includes(lastChar);
    const isButtonValueOperator = operators.includes(buttonValue);

    
    if (!isButtonValueOperator) {
          // If the button is a number
      if (operations.innerText === "") {
        operations.innerText = buttonValue;
        
      } else {
        operations.innerText += buttonValue;
        
      }
    } else {
      if (operations.innerText === "" && buttonValue === '-') {
        operations.innerText = '-';
        
      } 
      // Allow an operator if the last character is a number
      else if (!isLastCharOperator && operations.innerText !== "") {
        operations.innerText += buttonValue;
        
      }
    }
   
    
  });
});

let number = 0;
let result = 0;
// 96 + 4
equals.addEventListener('click', () => {
  for(let i=0; i< operations.innerText.length; i++){
    // check if it is a number
    if(!isNaN(operations.innerText[i])){
      number += parseInt(operations.innerText[i]);
      number *= 10; // 960
    }else{
      // an operation
      number /=10; // 96
      switch (operations.innerText[i]) {
          case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
          case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
          // Add other operations here
        }
      
    }
  }
  operations.innerText = result;
}
);

clear.addEventListener('click', () => {
  operations.innerText = '';
  result = 0;
  number = 0;
});