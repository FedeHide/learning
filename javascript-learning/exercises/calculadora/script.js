// add chosen value to the calculator´s screen
let add = (value) => document.getElementById('screen').value += value;


// erase characters on calculator´s screen
let erase = () => document.getElementById('screen').value = '';



// delete the last digit on calculator´s screen
function removeLastDigit() {
    var screenValue = document.getElementById('screen').value;
    
    // Verify that there is at least one digit before attempting to delete
    if (screenValue.length > 0) {
        // Remove last digit using slice
        var newValue = screenValue.slice(0, -1);
        document.getElementById('screen').value = newValue;
    }
}


// take the string value on the screen and evaluates the code
function calculate() {
    const screenValue = document.getElementById('screen').value;
    const result = eval(screenValue);
    document.getElementById('screen').value = result;
}
