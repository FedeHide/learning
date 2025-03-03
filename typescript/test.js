class Animal2 {
    #name = 'animal';

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }
}

const animal2 = new Animal2('dog');
console.log(animal2.getName()); // dog
