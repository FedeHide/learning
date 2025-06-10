const groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];

const searchForItem = (item) => {
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] === item) {
        console.log(`Found ${item}`);
        }
    }
};
searchForItem("eggs");
// O(n)


const searchFor2Items = (item) => {
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] === item) {
        console.log(`Found ${item}`);
        }
    }

    for (let j = 0; j < groceries.length; j++) {
        if (groceries[j] === item) {
        console.log(`Found ${item} 2`);
        }
    }

};
searchFor2Items("eggs");
// O(n + n) = O(2n) = O(n)
// Drop the constant so it becomes O(n) significa ignorar constantes multiplicativas al analizar la eficiencia de un algoritmo, porque lo importante es cómo escala con el tamaño del input (n), no cuántas veces exactamente se ejecuta.