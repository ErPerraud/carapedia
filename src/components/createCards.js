import { Pokemon } from "./Pokemon"
import { Card } from "./Card"


export async function createPokemonCards(pokemons, limit, offset) {

    pokemons = new Array();

    fetch("https://pokeapi.co/api/v2/pokemon?limit="+limit+"&offset="+offset)
        .then(data => data.json())
        .then((data) => {
            const res = data.results;
            for(let i = 0 ; i < Object.keys(res).length ; i++) {
                pokemons[i] = new Pokemon(res[i].name, res[i].url.split('/')[6]);
            }

            const appCards = document.querySelector(".App-cards");

            for(let i = 0 ; i < limit ; i++) {

                let imgSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+pokemons[i].id+".png";
                <Card name="pokemons[i].name" img="imgSprite" id="pokemons[i].id" />
            }
        });
}