//? Enums: a way to define a set of named constants 
// i.e. a collection of related values that can be used interchangeably
// enums has a index value (initializer) starting from 0 and increment by 1 for each value but we can change the index value
//! Convention: singular noun (not plural) and PascalCase. For properties, use PascalCase or CONSTANT_CASE

//* Numeric Enums
// Enums in TypeScript are a set of named constants that can be numeric or string-based.
// Numeric enums are number-based enums, which means the value of the enum is incremented by 1.

enum Direction {
    Up = 5,
    Down,
    Left,
    Right
}

console.log(Direction.Up); // 5 (because we set the index value to 5, default is 0)
console.log(Direction.Down); // 6
console.log(Direction.Left); // 7
console.log(Direction.Right); // 8


//* String Enums
// String enums are similar to numeric enums, but we can also use strings as enum values.

enum Weather {
    Sunny = 'Sunny ☀️',
    Rainy = 'Rainy 🌧️',
    Cloudy = 'Cloudy ☁️',
    Windy = 'Windy 🍃'
}


const currentWeather = Weather.Sunny;
console.log(`Today's weather is ${currentWeather}`); // Today's weather is Sunny ☀️


//! when to use enums:
// 1. When you have a set of related constants
// 2. When you need to define a set of named constants
// 3. When you need to work with a set of fixed values
// 4. When you need to define a set of named constants that can be used interchangeably
