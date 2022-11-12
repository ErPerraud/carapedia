import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from './Card';


const Cards = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=905&offset=0")
            .then((res) => setData(res.data.results));
    }, []);


    return (
        <div className='App-cards'>
            {
                data.map((pokemon) => <Card key={pokemon.url.split('/')[6]} name={pokemon.name} id={pokemon.url.split('/')[6]} img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"} />)
            }
        </div>
    );
};

export default Cards;