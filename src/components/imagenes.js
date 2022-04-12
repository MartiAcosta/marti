import {useState} from "react";

const Imagenes = (props) => {
    const [ratings, setRatings] = useState(0);  //HOOK

    const increment = () => {
        if (ratings <5){
            setRatings(ratings+1);
        }
        
    }

    return (
        <div className="imagen-container">
            <div className="imagen-imagen">
                <img src={props.thumbnail}/>   
            </div>
            <div className="imagen-info">
                <p>{ratings}</p>
                <button onClick={increment}>Agregar al carrito</button>
                <h3>{props.title}</h3>
                <p>{props.year}</p>
                <p>{props.mark}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
} 

export default Imagenes;