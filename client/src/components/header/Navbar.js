import React from 'react'
import "./Navbar.css";
import { Search } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
const navbar = () => {
        return(
           <header>
              <nav>
                 <div className='left'>
                    <img src='client/public/amalogo (1).png' alt=""/> 
                 </div>
                 <div className='nav_searchbar'>
                     <input type='text' name='' id=''/>
                     <div className='search_icon'>
                      <Search/>
                     </div>
                 </div>
                 <div className='right'>
                   <div className='nav_but'>
                    <NavLink to="/login">signin</NavLink>
                   </div>
                   <div className='cart_btn'></div>
                   <Badge badgeContent={4} color="primary">
                       <ShoppingCartIcon/>
                   </Badge>
                   <p>cart</p>
                 </div>
                 <Avatar className='avatar'/>
              </nav>
           </header>

   )
}

export default navbar
