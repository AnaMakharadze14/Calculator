
const buttons = document.querySelectorAll('.calc-btn');
const operations = document.getElementById('label');
const equals = document.getElementsByClassName('equals')[0];
const clear = document.getElementsByClassName('clear')[0];
const clear_entry = document.getElementsByClassName('clear-entry')[0];

const operators = ["+", "-", "*", "/"];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.dataset.value;
    const lastChar = operations.innerText.slice(-1);
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


let result = 0;

equals.addEventListener('click', () => {
  let expr = operations.innerText.replace(/(\d+)%/g, '($1/100)');
  result = Function(`return ${expr}`)();
  operations.append(document.createElement('br'));
  operations.innerHTML = `
  <span style="font-size: 20px;">${operations.innerText}<br>
  <span style="font-size: 30px;">${result}</span>
`;

}
);

clear.addEventListener('click', () => {
  operations.innerText = '';
  result = 0;
});

clear_entry.addEventListener('click', () => {
  operations.innerText = operations.innerText.slice(0, -1);
});