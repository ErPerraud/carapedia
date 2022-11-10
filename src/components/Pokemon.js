export class Pokemon {
    name;
    id;

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

export class Pokemons {

    pokemons;

    constructor() {
        this.pokemons = new Array();
    }
}