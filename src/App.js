import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Producto from './Producto';
import Tienda from './Tienda';
import Navbar from './components/NavBar'; 

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="App"> 
    <hr/>
    <Producto producto="Monitor" marca= "Hp" precio="$20.000"/>
    <Producto producto="Mouse" marca= "Logitech" precio="$3.500"/>
    <Tienda nombre="Martina Acosta"/>
    </div>
    </>
  );
} 

export default App;
