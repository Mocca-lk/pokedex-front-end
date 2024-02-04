function convertPokemonTypesToLi(pokemoTypes) {
    return pokemoTypes.map((typeSlot) => {
        return `<li class="type">${typeSlot.type.name}</li>`
    })
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${convertPokemonTypesToLi(pokemon.types).join('')}
                        </ol>

        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
    
</li>
`
}


const pokemonList = document.getElementById('pokemonList')
//normalmente usamos essa função de sintaxe reduzida em situações de call-back 
//fetch retorna uma promise, a promessa de um resultado.
// é o mesmo que usar .then (function () {com o body normal})
pokeApi.getPokemons().then((pokemons = []) => {
  const newHTML = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHTML
})


