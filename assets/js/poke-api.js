


const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.id
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const[type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json()) //converto a resposta recebida em json
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit~=${limit}`

    return fetch(url) //buscando lista de pokemons
    .then((response) => response.json()) //traz resposta e converte pra json
    .then((jsonBody) => jsonBody.results) //json vem cheio de detalhes e focamos nos resultados
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //mapeamos a lista em lista de requisições de detalhes em um novo fetch
    .then((detailRequests) => Promise.all(detailRequests)) //esperamos todas as requisições terminarem
    .then((pokemonsDetails) =>
    //ao término, traz a lista com os detalhes dos pokemons
       pokemonsDetails
    )
}

