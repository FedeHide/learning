export const getImage = async() => {

    try {

        const apiKey = 'wbKtOeUWEAFSbFTaGFj31VH3F696lKZz';
        const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data } = await res.json()
        const { url } = data.images.original;

        return url;

    } catch (error) {
        console.error(error)
        return 'No se encontro la imagen'
    } 
}