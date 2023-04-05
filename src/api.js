import axios from "axios"

export const pokeApi = async (setPoke) => {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=200`).then(res=> setPoke(res.data.results))
    return data
}
export const pokeInfo = async (info,name) => {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res=>info(res.data , "poke"))
    return data
}
export const pokeSpecies = async (info,name) => {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then(res=>info(res.data , "poke"))
    return data
}
