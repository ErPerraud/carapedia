import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import '../Moves.css';


const Move = (props) => {

    const {moveName} = useParams();

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/move/"+moveName)
            .then((res) => setData(res.data));
    }, []);

    console.log(data);

    return(
        <div>
        {data &&
        <div className="App">
            <h1>{data.name && data.names[7].name}</h1>
            <h2>Details :</h2>
            <div className='moves'>
                <h3>Accuracy : {data.accuracy && data.accuracy}</h3>
                <h3>Type : {data && data.type.name}</h3>
                <h3>Power : {data.power && data.power}</h3>
                <h3>PP : {data.pp && data.pp}</h3>
                <h3>Damage Class : {data && data.damage_class.name}</h3>
            </div>
            <h3>{data && data.flavor_text_entries[4].flavor_text}</h3>
        </div>
        }
        </div>
    );
}

export default Move;