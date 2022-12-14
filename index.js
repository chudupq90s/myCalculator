const numberButton = document.querySelectorAll('.numberButton');
const operationButton = document.querySelectorAll('.operationButton');
const equalButton = document.querySelector('#equalButton');

numberButton.forEach(button => {
    button.addEventListener('click',() => {
        console.log(parseFloat(button.value))
    });
});

operationButton.forEach(button => {
    button.addEventListener('click', ()=>{
        console.log(button.value)
    });
});