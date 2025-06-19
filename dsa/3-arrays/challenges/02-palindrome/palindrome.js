function isAPalindrome(text) {
    if (typeof text != "string") throw new Error('Input must be a string')
    if (text.length === 0) throw new Error('String cannot be empty')
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const reversed = cleanedText.split('').reverse().join('')
    console.log(reversed === cleanedText)
}

isAPalindrome("Menem !")