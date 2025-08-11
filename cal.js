
const buttons = document.querySelectorAll('.calc-btn');
const operations = document.getElementById('label');
const equals = document.getElementsByClassName('equals')[0];
const clear = document.getElementsByClassName('clear')[0];
const clearEntry = document.getElementsByClassName('clear-entry')[0];
let equalsClicked = false;
const operators = ["+", "-", "*", "/"];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.dataset.value;
    const lastChar = operations.innerText.slice(-1);
    const isLastCharOperator = operators.includes(lastChar);
    const isButtonValueOperator = operators.includes(buttonValue);
    // allow the answer to be used in next operations
    if(equalsClicked){
      operations.innerText = result;
      equalsClicked = false;
    }
    
    if (!isButtonValueOperator) {
          // If the button is a number
      if (operations.innerText === "" && buttonValue !== '%') {
        operations.innerText +=buttonValue;
      } else if(operations.innerText !== ""){
        if(!(buttonValue === '%' && (isLastCharOperator || lastChar === '%'))){
          operations.innerText += buttonValue;
        }
        
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


let result = 0;
equals.addEventListener('click', () => {
  // don't allow equals button to be clicked more than once
  if(!equalsClicked){
    let expr = operations.innerText.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
    result = Function(`return ${expr}`)();
    operations.append(document.createElement('br'));
    let aboveOperations = operations.innerText;
    operations.innerHTML = `
    <span style="font-size: 20px;">${aboveOperations}<br>
    <span style="font-size: 30px;">${result}</span>
    `;
    equalsClicked = true;
  }
  

}
);

clear.addEventListener('click', () => {
  operations.innerText = '';
  result = 0;
  equalsClicked = false;
});

clearEntry.addEventListener('click', () => {
  // remove the last digit of the operations but only if it is not yet calculated
  if(!equalsClicked){
    operations.innerText = operations.innerText.slice(0, -1);
  }
  
});