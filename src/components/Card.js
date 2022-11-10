
export const Card = (props) => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+props.id+".png";
    let route = "/pokemon/"+props.id;

    return (
        <a className="App-link" href={route}>
            <div className="App-card">
                <h1>{props.name}</h1>
                <img className='Poke-art' src={url} loading="lazy" />
                <p>n°{props.id}</p>
            </div>
        </a>
    );
}