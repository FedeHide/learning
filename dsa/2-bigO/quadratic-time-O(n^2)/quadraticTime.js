import { performance } from 'perf_hooks';

const numbers = Array.from({ length: 100 }, (_, i) => i + 1)

function findPairs(arr) {
    // O(n^2)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(`Pair: ${arr[i]}, ${arr[j]}`)
        }
    }
}

// Benchmarking the function
const iterations = 1;
let start = performance.now();
for (let i = 0; i < iterations; i++) {
    findPairs(numbers);
}
let end = performance.now();
console.log(`findPairs O(n^2) time: ${(end - start).toFixed(6)} ms for ${iterations} iteration(s)`);