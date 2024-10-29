import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Product } from './pages/Product';
import { NavBar } from './components/NavBar';
import { Context } from './contexts/listContext/context';
import { Favorites } from './pages/Favorites';
import { Cart } from './pages/Cart';
import { WindowContext } from './contexts/windowContext/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <WindowContext>
    <Context>
    <NavBar/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about/:id' element={<Product/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/checkout' element={<Cart/>}/>
        <Route path='*' element={<div>rota inválida</div>}/>
      </Routes>
    </Context>
    </WindowContext>
    </BrowserRouter>
  </React.StrictMode>
);

