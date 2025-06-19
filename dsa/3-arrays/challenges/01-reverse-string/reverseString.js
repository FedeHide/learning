function reverseString(text) {
    if (typeof text != "string") throw new Error('Input must be a string')
    if (text.length === 0) throw new Error('String cannot be empty')
    const reversed = text.split('').reverse().join('')
    console.log(reversed)
}

reverseString('Hello')