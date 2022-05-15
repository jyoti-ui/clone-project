import React from 'react';
import image from "../../assets/amazon_logo.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import "./Navbar.css";

const Navbar = () => {
  return (
<header>
    <nav>
        <div className='left'>
          <div className='navlogo'>
            <img src={image} />
          </div>
          <div className='nav_searchbar'>
            <input type="text" name="" id=""></input>
            <div className='search_icon'>
              <SearchIcon id="search"/>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='nav_btn'>
            <a href=''>Sign in</a>
          </div>
          <div className='cart_btn'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon id="icon" />
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className='avtar' />
        </div>
    </nav>
</header>
  )
}

export default Navbar;