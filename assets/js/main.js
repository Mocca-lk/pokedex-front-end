const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
    <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>

    <img src="${pokemon.photo}" alt="${pokemon.name}">

    </div>
    </li>
    `
}

function loadPokemonItens(offset, limit) {

//normalmente usamos essa função de sintaxe reduzida em situações de call-back 
//fetch retorna uma promise, a promessa de um resultado.
// é o mesmo que usar .then (function () {com o body normal})
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map(convertPokemonToLi).join('')
          pokemonList.innerHTML += newHTML
      })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNexPage = offset + limit

if (qtdRecordNexPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
} else {
    loadPokemonItens(offset, limit)
}

   
})

