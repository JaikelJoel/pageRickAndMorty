/* fetch('https://rickandmortyapi.com/api/character/')
  .then ((response) => response.json())
  .then ((data) => {
    const app = document.querySelector('#app');
    app.innerHTML =
    `${JSON.stringify(data.results)}`;
  }); */

const $pokemon = document.querySelector('#pokemon')
function renderPokemon(image) {
  $pokemon.setAttribute('src', image)
}
  fetch('https://pokeapi.co/api/v2/pokemon/25/')
  .then(response => response.json())
  .then(pokemon => {
    renderPokemon(pokemon.sprites.front_default)
  })