const reducer = (action, poke, state) => {
    if(action == 'ADD') {
        state.favPoke[state.favPoke.length] = poke;
    }
    else if(action == 'SUBSTRACT') {
        for(let i = 0 ; i < state.favPoke.length ; i++) {
            if(state.favPoke[i] == poke) {
                for(let j = i ; j < state.favPoke.length - 1 ; j++) {
                    state.favPoke[j] = state.favPoke[j+1];
                }
            }
            state.favPoke.pop();
        }
    }
}

export default reducer;