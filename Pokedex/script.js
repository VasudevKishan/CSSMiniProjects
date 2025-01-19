//TODO add case for pokemons without shiny forms
const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;

const colors = {
    fire: "#FDDFDF",
    grass: "#98d7a5",
    electric: "#f6f9be",
    water: "#DEF3FD",
    ground: "#dfba95",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#cb92ec",
    bug: "#DEFDE0",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#c3c3c3",
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

    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
    <div class="face front">
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
    <div class="face back">
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
