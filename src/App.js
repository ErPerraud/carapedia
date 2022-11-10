import { BrowserRouter, Routes, Route } from "react-router-dom";
import Caracteristiques from "./pages/Caracterisiques";
import Home from './pages/Home';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<Caracteristiques />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
