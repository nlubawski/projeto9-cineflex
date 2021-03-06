import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";

import Navbar from "./Navbar";
import Inicial from "./Inicial";
import Filme from "./Filme";
import Sessao from "./Sessao";
import Sucesso from "./Sucesso";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/filme/:idFilme" element={<Filme />} />
        <Route path="/sessao/:idSessao" element={<Sessao />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
