const parentContainer = document.getElementById('section1');
const changeTextButtonElement = document.getElementById('changeTextButton');
changeTextButtonElement.addEventListener('click', function () {
    const element = document.getElementById('textContent');
    element.textContent = 'Updated Text Content';
});

const changeStylesButtonElement = document.getElementById('changeStylesButton');
changeStylesButtonElement.addEventListener('click', function () {
    const element = document.getElementById('styleContent');
    element.style.color = 'red';
    element.style.backgroundColor = 'yellow';
    element.style.border = '2px solid red';
    element.style.padding = '5px';
    element.textContent = 'Updated Styles Added!';
});

const deleteElementButtonElement = document.getElementById('deleteElementButton');
deleteElementButtonElement.addEventListener('click', function () {
    const element = document.getElementById('removeThisElement');
    element.remove();
});

////////////////////////////////////////////////////////////////

const tempInputElement = document.getElementById('tempInput');
const convertToFButtonElement = document.getElementById('convertToFButton');
convertToFButtonElement.addEventListener('click', function () {
    const resultElement = document.getElementById('conversionResult');
    const celsius = tempInputElement.value;
    const fahrenheit = (9 / 5) * celsius + 32;
    const isResultNaN = isNaN(fahrenheit);
    if (isResultNaN || celsius === '') {
        resultElement.style.color = 'red';
        resultElement.innerText = 'Please enter a valid number!';
    } else {
        resultElement.style.color = 'unset';
        resultElement.innerText = `${celsius} Celsius is equal to ${fahrenheit.toFixed(1)} Fahrenheit.`;
    }
});
const convertToCButtonElement = document.getElementById('convertToCButton');
convertToCButtonElement.addEventListener('click', function () {
    const resultElement = document.getElementById('conversionResult');
    const fahrenheit = tempInputElement.value;
    const celsius = (5 / 9) * (fahrenheit - 32);
    const isResultNaN = isNaN(fahrenheit);
    if (isResultNaN || fahrenheit === '') {
        resultElement.style.color = 'red';
        resultElement.innerText = 'Please enter a valid number!';
    } else {
        resultElement.style.color = 'unset';
        resultElement.innerText = `${fahrenheit} Fahrenheit is equal to ${celsius.toFixed(1)} Celsius.`;
    }
});

////////////////////////////////////////////////////////////////

const fruitsList = ['Apple', 'Banana'];
const fruitsListElement = document.getElementById('fruitList');
fruitsList.forEach((fruit) => {
    const listItemElement = document.createElement('li');
    listItemElement.textContent = fruit;
    fruitsListElement.appendChild(listItemElement);
});
const fruitInputElement = document.getElementById('fruitInput');
const addFruitButtonElement = document.getElementById('addFruitButton');
addFruitButtonElement.addEventListener('click', function () {
    const listItemElement = document.createElement('li');
    listItemElement.innerText = fruitInputElement.value;
    fruitsListElement.appendChild(listItemElement);
    fruitInputElement.value = '';
});
