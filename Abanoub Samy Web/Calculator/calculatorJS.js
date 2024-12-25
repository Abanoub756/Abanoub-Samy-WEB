// Function to append the value to the display
function addValue(value) {
    document.form1.answer.value += value;
}

// Function to calculate and display the result
function calculateResult() {
    try {
        document.form1.answer.value = eval(document.form1.answer.value);
    } catch (error) {
        document.form1.answer.value = "Error";
    }
}

// Function to clear the display
function clearDisplay() {
    document.form1.answer.value = '';
}
