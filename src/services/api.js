export const API_BASE_URL = 'https://pokeapi.co/api/v2'

const buildEndpoint = (endpoint, query) => {
  return query ? `${API_BASE_URL}${endpoint}?${query}` : `${API_BASE_URL}${endpoint}`
}

export const endpoints = {
  pokemons: (query) => buildEndpoint('/pokemon', query),
  pokemonByName: (name, query) => buildEndpoint(`/pokemon/${name}`, query),
}
