function reverseNumber(number) {
    if (typeof number != "number") throw new Error('Input must be a number')
    const reversed = Number(number.toString().split('').reverse().join(''))
    console.log(reversed)
}

reverseNumber(123456)