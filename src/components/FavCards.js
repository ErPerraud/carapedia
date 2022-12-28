import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from './Card';


const FavCards = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        let arrayFav = sessionStorage.getItem("store").split(";");
        let pokeFav = new Array();
        arrayFav.forEach(element => {
            if(element != "") {
                axios.get("https://pokeapi.co/api/v2/pokemon/"+element)
                //.then((res) => setData(res.data.results));
                .then((res) => pokeFav.push(res.data));
            }
        })
        setData(pokeFav);
    }, []);


    return (
        <div className='App-cards'>
            {
                data.map((pokemon) => <Card key={pokemon.id} name={pokemon.name} id={pokemon.id} img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"} />)
            }
        </div>
    );
};

export default FavCards;