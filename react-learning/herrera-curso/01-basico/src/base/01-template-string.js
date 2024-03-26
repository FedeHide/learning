export const getSaludo = (name) => {
    return 'Hola ' + name
} 

const name = 'Vegeta'

console.log(`Este es un texto: ${ getSaludo( name ) } `)