class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    get(id) {
        if(this.data[id] === undefined) {
            throw new Error('Index out of bounds');
        }
        return this.data[id]
    }

    pop() {
        if(this.length === 0) {
            throw new Error('Array is empty');
        }
        delete this.data[this.length - 1]
        this.length--;        
    }

    shift() {
        if(this.length === 0) {
            throw new Error('Array is empty');
        }
        for (let i = 1; i < this.length; i++) {
            this.data[i - 1] = this.data[i]
        }

        delete this.data[this.length - 1];
        this.length--;
    }
}

const myNewArray = new MyArray()
myNewArray.push('ruki');
myNewArray.push('anya');
myNewArray.push('orion');
myNewArray.push('nyx');
console.log(myNewArray, "\n")

console.log("Getting selected element: ", myNewArray.get(1))

myNewArray.pop()
console.log("Remove last element: ", myNewArray)

myNewArray.shift()
console.log("Remove first element: ", myNewArray)


