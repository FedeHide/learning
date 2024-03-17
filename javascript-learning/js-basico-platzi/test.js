
//variables

let nombre = "Fede";
let surName = "Rossi";
let userName = "fede.hide";
let age = 33;
let email = "fede.hide@gmail.com";
let adult = true;
let savedMoney = 2000;
let debts = 200;

console.log (`Hello, my name is ${nombre} ${surName} and i have $${savedMoney - debts}`);




//funciones

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");




function presentation (nombre, lastname, nickname) {
    let completeName = nombre + " " + lastname;

    return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

presentation ("ruki", "elGato", "purris");




//condicionales

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {

    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}


if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


//un solo if

let tipoDeSuscripcion2 = 'Free';

if (tipoDeSuscripcion2 === 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} 
if (tipoDeSuscripcion2 === 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} 
if (tipoDeSuscripcion2 === 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} 
if (tipoDeSuscripcion2 === 'ExpertPlus') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}




//ciclos

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}


// let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++
}




for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;

while (i <= 10 && i >=2) {
    console.log("El valor de i es: " + i);
    i--
}




i = prompt("¿Cuanto es 2 + 2 ?")

while (i = 4) {
    console.log("Respondiste correctamente !!")
}



