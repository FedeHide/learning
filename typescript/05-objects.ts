//? objects in typescript
// the properties of an object are defined by the interface or a type alias

//* object with interface
interface Pokemon{
    name: string;
    type: string;
}

let pokemon: Pokemon = {
    name: 'Pikachu',
    type: 'Electric'
}


//* object with type alias
type PokemonType = {
    name: string;
    type: string;
}

let pokemonType: PokemonType = {
    name: 'Pikachu',
    type: 'Electric'
}


//* object with type annotation inline
const pokemonAnnotation: { name: string; type: string } = {
    name: 'Pikachu',
    type: 'Electric'
}


//* optional and readonly properties
interface Cat {
    name: string;
    age?: number; //! optional property  (if not provided, it will be undefined)
    readonly furColor: string; //! cannot be changed
}

let cat: Cat = {
    name: 'Fluffy',
    furColor: 'white'
}

cat.name = 'Whiskers'; //! OK
// cat.furColor = 'black'; //! Error: cannot change a readonly property


//* object with nested objects and arrays of objects

interface Product {
    name: string;
    price: number;
}

interface Address {
    city: string;
    country: string;
}

interface Cart {
    products: Product[];
}

interface Client {
    name: string;
    address: Address;
    cart: Cart;
}


let client: Client = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    },
    cart: {
        products: [
            { name: 'Laptop', price: 1000 },
            { name: 'Mouse', price: 20 }
        ]
    }
}


//* object as function return type
function createPokemon(name: string, type: string, attacks: string[]): { name: string; type: string; attacks: string[] } {
    return { name, type, attacks }
}


