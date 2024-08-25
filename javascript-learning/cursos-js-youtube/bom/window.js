


/*
setTimeOut(); -> nos permite ejecutar una funcion despues de cierto tiempo
clearTimeout(id); -> el setTimeOut() devuelve un id, con ese id como parametro podemos parar el set.
setInterval(); -> nos permite ejecutar una funcion cada cierto tiempo.
*/

let id;
let id2;
let j;

const iniciar = () => {
    console.log('INICIANDO')
    j = 3;
    for (let i = 1; i <= 4; i++) {
        if (i < 4) {
            id = setTimeout(() => {
                console.log(j);
                j--
            }, (i * 1000));
        } else{
            id2 = setTimeout(() => {
                console.log('HALA');
            }, (i * 1000));
        }
    }
}

const parar = () => {
    console.log('PARANDO TIMER...');
    for (let i = 0; i < j; i++) {
        clearTimeout(id);
        clearTimeout(id2);
    }
    setTimeout(() => {
        console.log('PARADO');
    }, 2000);
}

let cuenta = 0;

const iniciar2 = () => {
    setInterval(() => {
        console.log(cuenta);
        cuenta++
    }, 1000);
};