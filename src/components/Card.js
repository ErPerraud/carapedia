
export const Card = (props) => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+props.id+".png";

    return (
        <div className="App-card">
                <h1>{props.name}</h1>
                <img className='Poke-art' src={url} />
                <p>n°{props.id}</p>
            </div>
    );
}