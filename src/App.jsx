import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tienda from './Tienda';
import Navbar from './components/NavBar'; 
import ItemCount from './components/ItemCount';
import { products } from './utils/Products';

const App = () => {
  return (
    <>
    <Navbar/>
    {products.map(item =>
        <ItemCount
        key={item.di}
        thumbnail={item.thumbnail}
        title={item.title}
        year={item.year} 
        mark={item.mark}
        price={item.price}/>
    )}
    <div className="App"> <Tienda nombre="Martina Acosta"/></div>
    </>
  );
}

export default App; 