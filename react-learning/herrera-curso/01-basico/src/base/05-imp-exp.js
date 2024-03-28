import heroes from '../data/heroes'

export const getHeroesById = (id) => heroes.find((heroes) => heroes.id === id)
export const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner)