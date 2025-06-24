function sentenceCapitalization(text) {
    if (typeof text != "string") throw new Error('Input must be a string')
    if (text.length === 0) throw new Error('String cannot be empty')
    console.log(text.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
}

sentenceCapitalization('rukito BONITo')