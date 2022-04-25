import React from 'react'
import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount, } from './styledComponents';



const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+0) {
            setCount(count - 1);
        }
    }
    return (
        <ProductAmountContainer>
            <Button variant="text" onClick={increment}><Add /></Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant="text" onClick={decrement}><Remove /></Button>
            {
                stock && count
                ? <Button variant="contained" color="black" onClick={() => onAdd(count)}>Agregar al carrito</Button>
                : <Button variant="contained" disabled>Agregar al carrito</Button>
            }
            
        </ProductAmountContainer>
    );
}

export default ItemCount;





/*import {useState} from "react";

const ItemCount = (props) => {
    const [ratings, setRatings] = useState(0);  //HOOK

    const increment = () => {
        if (ratings <5){
            setRatings(ratings+1);
        }
        
    }

    return (
        <>
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
        </>
    );
} 

export default ItemCount;*/