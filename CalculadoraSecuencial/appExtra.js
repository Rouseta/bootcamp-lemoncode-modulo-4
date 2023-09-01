let resultPartial = 0;
let selectedOperation = null;

const displayElement = document.getElementById('display');
const additionButton = document.getElementById('additionButton');
const subtractionButton = document.getElementById('subtractionButton');
const multiplicationButton = document.getElementById('multiplicationButton');
const divisionButton = document.getElementById('divisionButton');
const calculateButton = document.getElementById('calculateButton');
const resetButton = document.getElementById('resetButton');

const inputNumber = parseFloat(displayElement.value);

additionButton.addEventListener('click', () => selectOperation('+'));
subtractionButton.addEventListener('click', () => selectOperation('-'));
multiplicationButton.addEventListener('click', () => selectOperation('*'));
divisionButton.addEventListener('click', () => selectOperation('/'));
calculateButton.addEventListener('click', calculateResult);
resetButton.addEventListener("click", resetCalculator)

function selectOperation(operation) {
    selectedOperation = operation;

}


function calculateResult() {
    if (selectedOperation !== null) {



        if (!isNaN(inputNumber)) {
            switch (selectedOperation) {
                case '+':
                    resultPartial += inputNumber;
                    break;
                case '-':
                    resultPartial -= inputNumber;
                    break;
                case '*':
                    resultPartial *= inputNumber;
                    break;
                case '/':
                    if (inputNumber !== 0) {
                        resultPartial /= inputNumber;
                    } else {
                        alert('No es posible dividir por cero.');
                    }
                    break;
            }

            selectedOperation = null;
            displayElement.value = resultPartial;
        }
    }
}
function resetCalculator() {
    resultPartial = 0;
    selectedOperation = null;
    inputNumber = 0;
}