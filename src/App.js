import { BrowserRouter, Routes, Route } from "react-router-dom";
import Caracteristiques from "./pages/Caracterisiques";
import Home from './pages/Home';
import Move from "./pages/Move";
import Store from './redux/store';
import reducer from "./redux/reducer";
import Favourite from "./pages/Favourite";


function App() {

    const initialState = { favPoke: [] };
    const store = new Store(initialState, reducer);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home prop1={store} />} />
        <Route path='/pokemon/:pokeId' element={<Caracteristiques prop1={store} />} />
        <Route path='/pokemon/move/:moveName' element={<Move prop1={store} />} />
        <Route path='/fav' element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
