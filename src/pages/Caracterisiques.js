import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import plante from "../assets/imgs/types/grass.png"
import poison from "../assets/imgs/types/poison.png"

const Caracteristiques = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/1")
            .then((res) => setData(res.data))
    }, []);

    console.log(data);
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+data.id+".png"

    return (
        <div className="App">
            <a className="App-link" href="/">Retour</a>


            <div className="Pokemon">
                <div>
                    <h1>{data.name}</h1>
                </div>
                <div>
                    <img className="Poke-art" src={url} ></img>
                </div>
                <div>
                    <img src={plante}></img>
                    <img src={poison}></img>
                </div>
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