import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const CartWidget = () => {
    return (
        <Badge badgeCot={0} cntenolor="white">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;