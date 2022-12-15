let currentValue = '';
let previousValue = '';

document.addEventListener('DOMContentLoaded',function(){
    //store all components of HTML in JS variables
    const numberButtons = document.querySelectorAll('[data-number]');
    const operatorButtons = document.querySelectorAll('[data-operation]');
    const equalButton = document.querySelector('[data-equal]');
    const deleteButton = document.querySelector('[data-delete]');
    const acButton = document.querySelector('[data-all-clear]');
    const previousOperandTextElement = document.querySelector('[data-previous-operand]');
    const currentOperandTextElement = document.querySelector('[data-current-operand]');
    //add the clicked numbers to the current screen
    numberButtons.forEach(number => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent);
        currentOperandTextElement.textContent = currentValue;
    }))
    //add the operator and second number
    operatorButtons.forEach(op => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent);
        previousOperandTextElement.textContent = previousValue + ' ' + opValue;
        currentOperandTextElement.textContent = currentValue;
    }))
    //compute the result when '=' is clicked
    equalButton.addEventListener('click', function(){
        compute(previousValue, currentValue, opValue);
        currentOperandTextElement.textContent = result;
        previousOperandTextElement.textContent = previousValue + ' ' + opValue + currentValue;
        currentValue = result;
    });
    //clear all 
    acButton.addEventListener('click', function(){
        clearAll();
        currentOperandTextElement.textContent = currentValue;
        previousOperandTextElement.textContent = previousValue;
    })
    //delete 
    deleteButton.addEventListener('click', function(){

    });
});
function handleNumber(num){
    currentValue += num;
};
function handleOperator(op){
    opValue = op;
    previousValue = currentValue;
    currentValue = '';
};
function compute(num1, num2, operation){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operation === '+'){
        result = num1 + num2;
    }
    else if (operation === '-'){
        result = num1 - num2; 
    }
    else if (operation === '*'){
        result = num1 * num2; 
    }
    else if (operation === '÷'){
        result = num1/num2; 
    }


}
function clearAll(){
    currentValue = '';
    previousValue = '';
    opValue ='';
};



