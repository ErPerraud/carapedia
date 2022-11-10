import logo from './assets/imgs/PokedexLogo.png';
import './App.css';
import Cards from './components/Cards';
import { Pokemon, Pokemons } from './components/Pokemon';
import { createPokemonCards } from './components/createCards';


function App() {
  let pokemons = new Pokemons();
  let offset = 0;
  let limit = 905;

  createPokemonCards(pokemons, limit, offset);

  return (
    <div className="App">
      <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Powered by PokéAPI</p>
      </header>
      <Cards />
    </div>
  );
}

export default App;
