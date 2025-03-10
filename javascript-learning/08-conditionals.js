//?/ Conditionals: are used to execute a block of code based on a condition.


let x = 10;

//*/ 1. if statement: executes a block of code if a specified condition is true.
if (x > 5) {
    console.log("if: ", 'x is greater than 5');
}


//*/ 2. else statement: executes a block of code if the same condition is false.
if (x < 11) {
    console.log("else: ", 'x is less than 11');
} else {
    console.log("else: ", 'x is greater than 11');
}


//*/ 3. else if statement: specifies a new condition if the first condition is false.
if (x < 5) {
    console.log("else if: ", 'x is less than 5'); 
} else if (x > 5) { 
    console.log("else if: ", 'x is greater than 5'); 
} else {
    console.log("else if: ", 'x is equal to 5');
}


//*/ 4. switch statement: selects one of many code blocks to be executed.
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log("switch: ", dayName); // Output: Wednesday


//*/ 5. ternary operator: assigns a value to a variable based on a condition.
let age = 22;
let beverage = (age >= 21) ? 'Beer' : 'Juice';
console.log("ternary operator: ", beverage); // Outpu: Beer

