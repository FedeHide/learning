function reverseNumber(number) {
    if (typeof number != "number") throw new Error('Input must be a number')
    const sign = Math.sign(number)
    const reversed = Number(Math.abs(number).toString().split('').reverse().join(''))
    console.log(reversed * sign)
}

reverseNumber(-123456)