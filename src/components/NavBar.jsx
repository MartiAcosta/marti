import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>Pc Tecnica</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/9' style={{textDecoration: "none", color: "white"}}><MenuItem>Monitor</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Notebook</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "white"}}><MenuItem>Accesorios</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;