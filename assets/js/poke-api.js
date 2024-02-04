


const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json()) //converto a resposta recebida em json
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit~=${limit}`

    return fetch(url) //buscando lista de pokemons
    .then((response) => response.json()) //traz resposta e converte pra json
    .then((jsonBody) => jsonBody.results) //json vem cheio de detalhes e focamos nos resultados
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //mapeamos a lista em lista de requisições de detalhes em um novo fetch
    .then((detailRequests) => Promise.all(detailRequests)) //esperamos todas as requisições terminarem
    .then((pokemonsDetails) =>
    //ao término, traz a lista com os detalhes dos pokemons
       (pokemonsDetails)
    )
}

