import { getHeroesById } from './05-imp-exp'

export const getHeroeByIdAsync = (id) => {

    return new Promise ( (resolve, reject) => {
        
        setTimeout(() => {
            // Tarea

            const p1 = getHeroesById( id );

            if (p1) {
                resolve(p1);
            } else {
                reject( 'No se pudo encontrar el heroe con el id: ' +  id)
            }

        }, 1000);
    })
}