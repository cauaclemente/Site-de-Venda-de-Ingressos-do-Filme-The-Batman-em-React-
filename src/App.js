import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './page/home';
import Comentarios from './components/comentarios/comentarios';
import Contatos from './components/contatos/contatos';
import Fotos from './components/fotos/fotos';


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element = {<Home1 />}/>
     <Route path='/fotos' element = {<Fotos/>}/>
     <Route path='/comentarios'element = {<Comentarios/>}/>
     <Route path='/contatos'element = {<Contatos/>}/>
    </Routes>
    </BrowserRouter>
   );
}

export default App;
