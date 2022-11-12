import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import {useParams} from "react-router-dom";
import "../Caracteristiques.css";

// Images imports
import bug from "../assets/imgs/types/bug.png";
import dark from "../assets/imgs/types/dark.png";
import dragon from "../assets/imgs/types/dragon.png";
import electric from "../assets/imgs/types/electric.png";
import fairy from "../assets/imgs/types/fairy.png";
import fighting from "../assets/imgs/types/fighting.png";
import fire from "../assets/imgs/types/fire.png";
import flying from "../assets/imgs/types/flying.png";
import ghost from "../assets/imgs/types/ghost.png";
import grass from "../assets/imgs/types/grass.png";
import ground from "../assets/imgs/types/ground.png";
import ice from "../assets/imgs/types/ice.png";
import normal from "../assets/imgs/types/normal.png";
import poison from "../assets/imgs/types/poison.png";
import psychic from "../assets/imgs/types/psychic.png";
import rock from "../assets/imgs/types/rock.png";
import shadow from "../assets/imgs/types/shadow.png";
import steel from "../assets/imgs/types/steel.png";
import unknown from "../assets/imgs/types/unknown.png";
import water from "../assets/imgs/types/water.png";




const Caracteristiques = () => {

    const {pokeId} = useParams();

    let abilities = useRef("");

    let moves = useRef(new Map());

    // We take the fact that all pokemon has 2 types maximum
    let type1 = useRef(undefined);
    let type2 = useRef(undefined);

    // The variable that contains the moves' table
    let tableMoves = useRef(undefined);

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/"+pokeId)
            .then((res) => {
                setData(res.data);

                // Set abilities for the current pokemon
                setAbilities(abilities, res.data);
                
                // Set types for the current pokemon
                setTypes(type1, type2, res.data);

                // Set moves for the current pokemon
                let keys = new Array();
                let values = new Array();
                res.data.moves.forEach((element) => {
                    keys.push(element.move.name);
                    values.push(element.move.url);
                });

                for(var i = 0; i < keys.length; i++){ 
                    moves.current.set({name: keys[i], url: values[i]}); 
                }

                tableMoves.current = setTable(moves.current);
            })
    }, []);


    // abilities = getAbilities(data.abilities);
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+data.id+".png"
    const altName = "Image of " + data.name;


    return (
        <div className="App_carac">
            <a className="App-link retour" href="/">Retour</a>

            <div className="Pokemon">
                <div className="Base">
                    <img className="Poke-art_carac" src={url} alt={altName} />
                    <h1>{data.name}</h1>
                </div>

                <div className="Caracteristiques">
                    <h3>Height : {data.height/10} m</h3>
                    <h3>Weight : {data.weight/10} Kg</h3>
                    <div className="Abilities">
                        <h3>Abilities : </h3>
                        <h4>{
                            abilities.current
                        }</h4>
                    </div>
                    <div className="Types">
                        <h3>Types : </h3>
                        <img className="Poke-type" src={type1.current} alt="" />
                        <img className="Poke-type" src={type2.current} alt="" />
                    </div>
                </div>
            </div>
            <div className="Moves">
                <h4>{tableMoves.current}</h4>
            </div>
        </div>
    );
}

function setTable(moves) {

    let names = new Array();

    for (const [key, value] of moves.entries()){
        names.push(key['name']);
    }

    return(
        <div>
            <h1>Moves</h1>
            {names.map((move) => <h3>{move}</h3>)}
        </div>
    )
}

function setTypes(type1, type2, data) {
    data.types.forEach((element) => {
        if(type1.current == undefined) {
            chooseType(type1, element);
        }
        else {
            chooseType(type2, element);
        }
    });
}

function setAbilities(abilities, data) {
    abilities.current = "";
    let i = 0;
    data.abilities.forEach((element) => {
        if(i < data.abilities.length - 1) {
            abilities.current += element.ability.name + ", ";
        }
        else {
            abilities.current += element.ability.name + "";
        }
        i++;
    });
}

function chooseType(type, element) {
    switch(element.type.name) {
        case "bug":
            type.current = bug;
            break;
        case "dark":
            type.current = dark;
            break;
        case "dragon":
            type.current = dragon;
            break;
        case "electric":
            type.current = electric;
            break;
        case "fairy":
            type.current = fairy;
            break;
        case "fighting":
            type.current = fighting;
            break;
        case "fire":
            type.current = fire;
            break;
        case "flying":
            type.current = flying;
            break;
        case "ghost":
            type.current = ghost;
            break;
        case "grass":
            type.current = grass;
            break;
        case "ground":
            type.current = ground;
            break;
        case "ice":
            type.current = ice;
            break;
        case "normal":
            type.current = normal;
            break;
        case "poison":
            type.current = poison;
            break;
        case "psychic":
            type.current = psychic;
            break;
        case "rock":
            type.current = rock;
            break;
        case "shadow":
            type.current = shadow;
            break;
        case "steel":
            type.current = steel;
            break;
        case "unknown":
            type.current = unknown;
            break;
        case "water":
            type.current = water;
            break;
    }
}

export default Caracteristiques;