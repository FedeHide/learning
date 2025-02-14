//?/ Strings: are a sequence of characters, like "Hello World". 
// Strings are used to represent text and are made up of characters. 
// Strings can be created as primitives, from string literals, or as objects, using the String() constructor.

//*/ String Literals
let stringLiteral = 'JavaScript';
console.log("string literal: ", stringLiteral); // JavaScript


//*/ String Constructor
let stringConstructor = new String('JavaScript');
console.log("string constructor: ", stringConstructor); // [String: 'JavaScript']


//*/ template string (backticks): are enclosed by the backtick (` `) character instead of double or single quotes.
let templateString = `TypeScript`;
let templateString2 = `JavaScript Learning`;
console.log("template string: ", `${templateString} and ${templateString2}`); // TypeScript and JavaScript Learning


//*/ String Properties
let stringLength = 'JavaScript';
console.log("string length: ", stringLength.length); // 10


//*/ String concatenation: is the operation of joining two strings together.
let stringConcatenation = 'Java' + 'Script';
console.log("string concatenation: ", stringConcatenation); // JavaScript


//*/ access characters: you can access characters in a string using the index.
let stringAccess = 'JavaScript';
console.log("access characters[4]: ", stringAccess[4]); // S


//*/ String Methods: are used to work with strings.
console.log("\n", "String Methods");
let x1 = 'JavaScript';

// charAt(): returns the character at a specified index (position) in a string.
console.log("chartAt(4): ", x1.charAt(4)); // S

// charCodeAt(): returns the Unicode of the character at a specified index in a string.
console.log("charCodeAt(4): ", x1.charCodeAt(4)); // 83

// concat(): joins two or more strings.
console.log("concat(' ', 'Learning'): ", x1.concat(' ', 'Learning')); // JavaScript Learning

// includes(): checks if a string contains a specified string.
console.log("includes('Java'): ", x1.includes('Java')); // true

// indexOf(): returns the index of the first occurrence of a specified value in a string.
console.log("indexOf('a'): ", x1.indexOf('a')); // 1

// lastIndexOf(): returns the index of the last occurrence of a specified value in a string.
console.log("lastIndexOf('a'): ", x1.lastIndexOf('a')); // 3

// match(): searches a string for a match against a regular expression and returns the matches.
console.log("match(/Java/): ", x1.match(/Java/)); // [ 'Java', index: 0, input: 'JavaScript', groups: undefined ]

// repeat(): returns a new string with a specified number of copies of an existing string.
console.log("repeat(2): ", x1.repeat(2)); // JavaScriptJavaScript

// replace(): searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
console.log("replace('Java', 'Type'): ", x1.replace('Java', 'Type')); // TypeScript

// replaceAll(): replaces all occurrences of a specified value in a string.
console.log("replaceAll('a', 'A'): ", x1.replaceAll('a', 'A')); // JAvAScript

// search(): searches a string for a specified value, or a regular expression, and returns the position of the match.
console.log("search('Script'): ", x1.search('Script')); // 4

// slice(): extracts a part of a string and returns a new string.
console.log("slice(4, 10): ", x1.slice(4, 10)); // Script

// split(): splits a string into an array of substrings.
console.log("split('a'): ", x1.split('a')); // [ 'J', 'v', 'Script' ]

// startsWith(): checks if a string starts with a specified value.
console.log("startsWith('Java'): ", x1.startsWith('Java')); // true

// substring(): extracts the characters from a string, between two specified indices.
console.log("substring(4, 10): ", x1.substring(4, 10)); // Script

// toLowerCase(): converts a string to lowercase letters.
console.log("toLowerCase(): ", x1.toLowerCase()); // javascript

// toUpperCase(): converts a string to uppercase letters.
console.log("toUpperCase(): ", x1.toUpperCase()); // JAVASCRIPT

// trim(): removes whitespace from both ends of a string.
let x2 = '  JavaScript  ';
console.log("trim(): ", x2.trim()); // JavaScript

// valueOf(): returns the primitive value of a string object.
console.log("valueOf(): ", x1.valueOf()); // JavaScript


//*/ Template Literals: are string literals allowing embedded expressions.
console.log("\n", "Template Literals");

let x3 = 'JavaScript';
let x4 = 'Learning';
let x5 = `${x3} ${x4}`;
console.log("template literals: ", x5); // JavaScript Learning


//*/ Escape Sequences: are used to insert special characters in strings.
console.log("\n", "Escape Sequences");

let x6 = 'I\'m learning "JavaScript"';
console.log("escape sequences: ", x6); // I'm learning "JavaScript"


//*/ String Interpolation: are a way to embed expressions inside string literals, using ${}.
console.log("\n", "String Interpolation");

let x7 = 'JavaScript';
let x8 = 'Learning';
let x9 = `I'm learning ${x7}`;
console.log("string interpolation: ", x9); // I'm learning JavaScript
