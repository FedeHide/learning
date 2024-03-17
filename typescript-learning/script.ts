// funcion con callback

const x = (fn: (a: string) => void) => {
    fn('Ruki')
}

const y = (a: string) => {
    console.log(`Hola ${a}`);
}

x(y);


// Type alias

type x = {
    a: number,
    b: Number
};

type y = x & {c: number};

let z: y = {
    a: 1,
    b: 2,
    c: 3
};


const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

type asd = 'asd' | 'dfg' | 'hgf'

// const API_URL = "https://api.github.com/search/repositories?q=javascript"
// const response = await(API_URL);

interface Mario {
    nombre: string,
    saltar: () => void
};

interface Sonic {
    nombre: string,
    correr: () => void
};

type Personaje = Mario | Sonic;

//type guard
function checkIsSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined;
};

function jugar(personaje: Personaje) {
    if (checkIsSonic(personaje)) {
        personaje.correr()
    }
};