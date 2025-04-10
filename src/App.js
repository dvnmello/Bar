import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
// elementos
import Bebidas from './paginas/Bebidas';
import Petiscos from './paginas/Petiscos';
import Drinks from './paginas/Drinks';
import Pedidos from './paginas/Pedidos';
import Home from './paginas/Home';
import Cervejas from './paginas/Cervejas';
import Refrigerantes from './paginas/Refrigerantes';
import Sucos from './paginas/Sucos';
import Whiskeys from './paginas/Whiskeys';
import Vinhos from './paginas/Vinhos';
import SemAlcool from './paginas/SemAlcool';
import ComAlcool from './paginas/ComAlcool';




function App() {
  return (
    <Router>
   <div className="app-container">
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/pedidos">Pedidos</Link>
            </li>
            {/*<li>
              <Link to="/bebidas">Bebidas</Link>
            </li>
            <li>
              <Link to="/petisco">Petisco</Link>
            </li>
            <li>
              <Link to="/drinks">Drinks</Link>
            </li>*/}
            <li>
              <Link to="/drinks">Pagamento</Link>
            </li>
          </ul>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/bebidas" element={<Bebidas/>} />
            <Route path="/petiscos" element={<Petiscos/>} />
            <Route path="/drinks" element={<Drinks/>} />
            <Route path="/pedidos" element={<Pedidos/>} />
            <Route path="/cervejas" element={<Cervejas/>} />
            <Route path="/refrigerantes" element={<Refrigerantes/>} />
            <Route path="/sucos" element={<Sucos/>} />
            <Route path="/whiskeys" element={<Whiskeys/>} />
            <Route path="/vinhos" element={<Vinhos/>} />    
            <Route path="/semalcool" element={<SemAlcool/>} />
            <Route path="/comalcool" element={<ComAlcool/>} />          
            {/* Adicione rotas para as outras páginas aqui */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
