"use strict";
// funcion con callback
const x = (fn) => {
    fn('Ruki');
};
const y = (a) => {
    console.log(`Hola ${a}`);
};
x(y);
let z = {
    a: 1,
    b: 2,
    c: 3
};
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"
const baz = 0 ?? 42;
console.log(baz);
;
;
function checkIsSonic(personaje) {
    return personaje.correr !== undefined;
}
;
function jugar(personaje) {
    if (checkIsSonic(personaje)) {
        personaje.correr();
    }
};
