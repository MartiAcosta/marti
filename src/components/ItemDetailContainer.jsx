import { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { products } = require('../utils/Products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useReducer({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;