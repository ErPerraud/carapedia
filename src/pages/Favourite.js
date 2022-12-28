import React from "react";
import logo from '../assets/imgs/PokedexLogo.png';
import '../App.css';
import FavCards from '../components/FavCards';

const Favourite = (props) => {

    

    return (
        <div className="App">
            <header className="App-header">
                <p>Favourite Pokemon</p>
            </header>
            <FavCards />
        </div>
    );
}

export default Favourite;