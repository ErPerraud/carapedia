import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "../Caracteristiques.css";
import plante from "../assets/imgs/types/grass.png"
import poison from "../assets/imgs/types/poison.png"

const Caracteristiques = () => {

    const {pokeId} = useParams();

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/"+pokeId)
            .then((res) => setData(res.data))
    }, []);

    console.log(data);
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+data.id+".png"
    const altName = "Image of " + data.name;


    return (
        <div className="App">
            <a className="App-link retour" href="/">Retour</a>

            <div className="Pokemon">
                <div className="Base">
                    <img className="Poke-art_carac" src={url} alt={altName} />
                    <h1>{data.name}</h1>
                </div>

                <div className="Caracteristiques">
                    <h3>Height : {data.height*10}cm</h3>
                    <h3>Weight : </h3>
                    <h3>Abilities : </h3>
                    <div className="Types">
                        <h3>Types : </h3>
                        <img src={plante} alt="" />
                        <img src={poison} alt="" />
                    </div>
                </div>
            </div>
            <div className="Moves">
                <table>
                    <thead>
                        <tr>
                            <th>Attak</th>
                            <th>Type</th>
                            <th>Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Balance-feuilles</td>
                            <td>Pas Status</td>
                            <td>Pas fort</td>
                        </tr>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Caracteristiques;