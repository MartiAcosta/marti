import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tienda from './Tienda';
import Navbar from './components/NavBar'; 
import ItemCount from './components/ItemCount';


const data = [
{
  id: 1,
  thumbnail: "https://www.cetrogar.com.ar/media/catalog/product/c/m/cm3202-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",
  title: "Monitor",
  year: "2019",
  mark: "Hp",
  price: "$5200",
},
{
  id: 2,
  thumbnail: "https://http2.mlstatic.com/D_NQ_NP_961384-MLA49035888609_022022-O.webp",
  title: "Gabinete",
  year: "2019",
  mark: "Hp",
  price: "$5200",
},
{
  id: 3,
  thumbnail: "https://www.cetrogar.com.ar/media/catalog/product/c/m/cm3193-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",
  title: "Mouse",
  year: "2019",
  mark: "Hp",
  price: "$5200",
},
{
  id: 4,
  thumbnail: "https://www.cetrogar.com.ar/media/catalog/product/c/m/cm3290-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",
  title: "Teclado",
  year: "2019",
  mark: "Hp",
  price: "$5200",
},
{
  id: 5,
  thumbnail: "https://www.cetrogar.com.ar/media/catalog/product/c/m/cm3076_4_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
  title: "Impesora",
  year: "2019",
  mark: "Hp",
  price: "$5200",
},
]

const App = () => {
  return (
    <>
    <Navbar/>
    {data.map(item =>
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