//TODO add case for pokemons without shiny forms
const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;

const colors = {
    fire: "#fbd4d4",
    grass: "#98d7a5",
    electric: "#fbffb7",
    water: "#c6e2ef",
    ground: "#dfba95",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#cb92ec",
    bug: "#c1ffc5",
    dragon: "#fe7373",
    psychic: "#5ae9ff",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#c3c3c3",
};

const lightendColors = {
    fire: "#f4dcdc",
    grass: "#a9eeb6",
    electric: "#fdffd2",
    water: "#d8f2fe",
    ground: "#ffd5ab",
    rock: "#b1b1b0",
    fairy: "#dac7de",
    poison: "#e3b3fe",
    bug: "#DEFDE0",
    dragon: "#eb8181",
    psychic: "#b7f5ff",
    flying: "#d1d0f6",
    fighting: "#fff9ed",
    normal: "#d5d5d5",
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, "0");
    const poke_types = pokemon.types.map((type) => type.type.name);
    const type = main_types.find((type) => poke_types.indexOf(type) > -1);
    const color = colors[type];
    const shinyColor = lightendColors[type];

    // pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
    <div class="face front" style="background-color: ${color};">
        <div class="img-container">
                    <img
                        src=${pokemon.sprites.other["official-artwork"].front_default}
                        alt=""
                    />
                </div>
                <div class="info">
                    <span class="number">#${id}</span>
                    <h3 class="name">${name}</h3>
                    <small class="type">Type: <span>${type}</span></small>
                </div>
    </div>
    <div class="face back" style="background-color: ${shinyColor};">
        <div class="img-container">
                    <img
                        src=${pokemon.sprites.other["official-artwork"].front_shiny}
                        alt=""
                    />
                </div>
                <div class="info">
                    <span class="number">#${id}</span>
                    <h3 class="name">${name} <small>Shiny</small></h3>
                    <small class="type">Type: <span>${type}</span></small>
                </div>
    </div>

    `;

    pokemonEl.innerHTML = pokemonInnerHTML;
    poke_container.appendChild(pokemonEl);

    pokemonEl.addEventListener("click", () => {
        pokemonEl.classList.toggle("flip");
    });
};

fetchPokemons();
