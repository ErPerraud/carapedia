const Store = (initialState = {}, reducer) => {

    // Notre objet state
    let state = initialState;

    // La méthode pour accéder au state depuis l'extérieur
    const getState = () => state;

    const dispatch = (poke, action) => {
        reducer(action, poke, state);
    }

    // On retourne les fonctions que l'on veut rendre accessible
    return {
        getState,
        dispatch,
    };
}

export default Store;