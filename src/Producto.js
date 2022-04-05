import './App.css';
import monitor from './monitor3.png';
import imagen from './mouse2.png';

const Producto = (props) => {
    return(
    <>
    <div><img src={monitor}/></div>
    <h2 className= "titulo">{props.producto}</h2>
    <div><span>{props.marca}</span></div>
    <div><span>{props.precio}</span></div>
    <hr/>
    </>
    );
}

export default Producto;