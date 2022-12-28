import React from "react";
import logo from '../assets/imgs/PokedexLogo.png';
import '../App.css';
import Cards from '../components/Cards';

const Home = (props) => {

    

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Powered by PokéAPI</p>
                <a className="AppLink" href="/fav">Favourite Pokemon</a>
            </header>
            <Cards />
        </div>
    );
}

export default Home;