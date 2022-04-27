import { DetailContainer } from './styledComponents';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


const Cart = () => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        setItemCount(qty);
    }

    return(
<DetailContainer>
    {
    itemCount === 1
    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
    : <Link to='/cart' style={{textDecoration: 'none'}}><Button variant='contained' color='black'>Ir al carrito</Button></Link>
    }
</DetailContainer>
);
}

export default Cart; 