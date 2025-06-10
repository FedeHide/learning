const productsList = {
    "abc123": { productName: "notebook", price: 900 },
    "def456": { productName: "smartphone", price: 700 },
    "ghi789": { productName: "tablet", price: 500 },
}

function getProductById(id) {
    // O(1) - Constant time complexity
    return productsList[id];
}
console.log(getProductById("abc123"));


function getProductById2(productsList) {
    // O(n) - Linear time complexity
    // This function iterates through the list.
    return Object.entries(productsList).find(([id, _]) => id === "abc123")?.[1];
}
console.log(getProductById2(productsList))