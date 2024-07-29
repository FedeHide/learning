//?/ Strings: are a sequence of characters, like "Hello World". 
// Strings are used to represent text and are made up of characters. 
// Strings can be created as primitives, from string literals, or as objects, using the String() constructor.

//*/ String Literals
let a = 'JavaScript';
console.log(a); // JavaScript


//*/ String Constructor
let b = new String('JavaScript');
console.log(b); // [String: 'JavaScript']


//*/ String Properties
let c = 'JavaScript';
console.log(c.length); // 10


//*/ String Methods: are used to work with strings.
let d = 'JavaScript';

// charAt(): returns the character at a specified index (position) in a string.
console.log(d.charAt(4)); // S

// charCodeAt(): returns the Unicode of the character at a specified index in a string.
console.log(d.charCodeAt(4)); // 83

// concat(): joins two or more strings.
console.log(d.concat(' ', 'Learning')); // JavaScript Learning

// includes(): checks if a string contains a specified string.
console.log(d.includes('Script')); // true

// indexOf(): returns the index of the first occurrence of a specified value in a string.
console.log(d.indexOf('a')); // 1

// lastIndexOf(): returns the index of the last occurrence of a specified value in a string.
console.log(d.lastIndexOf('a')); // 3

// match(): searches a string for a match against a regular expression and returns the matches.
console.log(d.match(/a/g)); // [ 'a', 'a' ]

// repeat(): returns a new string with a specified number of copies of an existing string.
console.log(d.repeat(2)); // JavaScriptJavaScript

// replace(): searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
console.log(d.replace('Java', 'Type')); // TypeScript

// search(): searches a string for a specified value, or a regular expression, and returns the position of the match.
console.log(d.search('Script')); // 4

// slice(): extracts a part of a string and returns a new string.
console.log(d.slice(0, 4)); // Java

// split(): splits a string into an array of substrings.
console.log(d.split('')); // [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]

// startsWith(): checks if a string starts with a specified value.
console.log(d.startsWith('Java')); // true

// substr(): extracts the characters from a string, beginning at a specified start position, and through the specified number of character.
console.log(d.substr(4, 6)); // Script

// substring(): extracts the characters from a string, between two specified indices.
console.log(d.substring(4, 10)); // Script

// toLowerCase(): converts a string to lowercase letters.
console.log(d.toLowerCase()); // javascript

// toUpperCase(): converts a string to uppercase letters.
console.log(d.toUpperCase()); // JAVASCRIPT

// trim(): removes whitespace from both ends of a string.
let e = '  JavaScript  ';
console.log(e.trim()); // JavaScript

// valueOf(): returns the primitive value of a string object.
console.log(d.valueOf()); // JavaScript


//*/ Template Literals: are string literals allowing embedded expressions.
let f = 'JavaScript';
let g = 'Learning';
let h = `${f} ${g}`;
console.log(h); // JavaScript Learning


//*/ Escape Sequences: are used to insert special characters in strings.
let i = 'I\'m learning "JavaScript"';
console.log(i); // I'm learning "JavaScript"


//*/ String Interpolation: are a way to embed expressions inside string literals, using ${}.
let j = 'JavaScript';
let k = 'Learning';
let l = `I'm learning ${j}`;
console.log(l); // I'm learning JavaScript
