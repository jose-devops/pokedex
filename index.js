const pokeCard                  = document.querySelector(`[data-poke-card]`);
const pokeName                  = document.querySelector(`[data-poke-name]`);
const pokeImg                   = document.querySelector(`[data-poke-img]`);
const pokeImgContainer          = document.querySelector(`[data-poke-img-container]`);
const pokeId                    = document.querySelector(`[data-poke-id]`);
const pokeTypes                 = document.querySelector(`[data-poke-types]`);
const pokeStats                 = document.querySelector(`[data-poke-stats]`);
const pokeHab                   = document.querySelector(`[data-poke-habilidades]`);



const searchPokemon = event => {
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))

}


const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const{status, types} = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute(`src`, sprite);
    pokeId.textContent = `#Id: ${data.id}`;
    pokeTypes.textContent = `Type ${data.types[0].type.name}`;
    pokeHab.textContent = `Type ${data.types[0].type.name}`
    
    


    
}










