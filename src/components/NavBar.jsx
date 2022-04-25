import React from 'react'
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const Navbar = () => {
    return (
        <header>
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>Pc Tecnica</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/11' style={{textDecoration: "none", color: "white"}}><MenuItem>Notebook</MenuItem></Link>
                    <Link to='/category/22' style={{textDecoration: "none", color: "white"}}><MenuItem>Accesorios</MenuItem></Link>
                    <Link to='/category/33' style={{textDecoration: "none", color: "white"}}><MenuItem>Contacto</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem><CartWidget/></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
</header>
);
}

export default Navbar;
