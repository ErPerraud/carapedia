import React from 'react';

export const Card = (props) => {

    return (
        <div className="App-card">
                <h1>{props.name}</h1>
                <img className='Poke-art' href={props.img} />
            </div>
    );
}