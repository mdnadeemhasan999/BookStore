import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { FaShoppingCart, FaRegHeart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <AppBar position="static" style={{ background:'#ffff' }}>
      <Toolbar className='container'>
        <img
          src='./img/storeLogo.png'
          alt="Logo"
          style={{ maxWidth: '300px', maxHeight: '80px' }}
        />
        <div style={{ flexGrow: 1 }}></div>
          <NavLink className='nav' to='/'>Home</NavLink>
          <NavLink className='nav' to='/wishlist'><FaRegHeart /></NavLink>
          <NavLink className='nav' to='/card'><FaShoppingCart /></NavLink>
          <NavLink className='nav' to='/Search'><FaSearch /></NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
