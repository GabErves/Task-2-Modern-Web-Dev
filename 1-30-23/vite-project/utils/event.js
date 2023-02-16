import { add, divide, modulo, multiply, subtract } from "./math";


const eventHandler = () => {

    const addButton = document.getElementById('add');
    const multiplyButton = document.getElementById('multiply');
    const subtractButton = document.getElementById('subtract');
    const divideButton = document.getElementById('divide');
    const modButton = document.getElementById('mod');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    const multiply_result = document.getElementById('multiply_result');
    const subtract_result = document.getElementById('subtract_result');
    const divide_result = document.getElementById('divide_result');
    const mod_result = document.getElementById('mod_result');
    const updateDomWithAddedNumbers = () => {
        result.innerHTML = 
            // parseInt(number1.value, 10)+parseInt(number2.value,10);
            add(number1.value,number2.value);
            
    }

    const updateDomWithMultipliedNumbers = () =>{
        multiply_result.innerHTML = multiply(number1.value, number2.value);
    }

    const updateDomWithSubtractedNumbers = () =>{
        subtract_result.innerHTML = subtract(number1.value, number2.value);
    }

    const updateDomWithDividedNumbers = () =>{
        divide_result.innerHTML = divide(number1.value, number2.value);
    }
    
    const updateDomWithModNumbers = () =>{
        mod_result.innerHTML = modulo(number1.value, number2.value);
    }

    
    


    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multiplyButton.addEventListener('click', updateDomWithMultipliedNumbers);
    divideButton.addEventListener('click', updateDomWithDividedNumbers);
    subtractButton.addEventListener('click', updateDomWithSubtractedNumbers);
    modButton.addEventListener('click', updateDomWithModNumbers);
    

}

export  {eventHandler};