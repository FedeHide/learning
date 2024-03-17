// Condicional con if, else, else if:

var player;
var pc;

function game (player, pc) {
    if (player === pc) {
        console.log("Es un empate");
    } else if (player === "piedra" && pc === "papel" || player === "papel" && pc === "tijeras" || player === "tijeras" && pc === "piedra") {
        console.log("Perdiste");
    } else if (player === "piedra" && pc === "tijeras" || player === "papel" && pc === "piedra" || player === "tijeras" && pc === "papel") {
        console.log("Ganaste");
    } else {
        console.log("Escribe piedra, papel o tijeras");
    }
}

game (player, pc);


// condicional con switch:

var player;
var pc;

function game (player, pc) {
    switch (true) {
        case (player === pc):
            console.log("Es un empate");
            break;
        case (player === "piedra" && pc === "papel" || player === "papel" && pc === "tijeras" || player === "tijeras" && pc === "piedra"):
            console.log("Perdiste");
            break;
        case (player === "piedra" && pc === "tijeras" || player === "papel" && pc === "piedra" || player === "tijeras" && pc === "papel"):
            console.log("Ganaste");
            break;
        default:
            console.log("Escoge piedra, papel o tijeras")
    }
}

game(player, pc);