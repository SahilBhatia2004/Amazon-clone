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
                 
                 <div className='nav_searchbar'>
                 </div>
                     <input type='text' name='' id=''/>
                 </div>
                 <div className='right'>
                   <div className='nav_but'>
                    <NavLink to="/login">SignIn</NavLink>
                   </div> 
                </div>
              </nav>
           </header>

   )
}

export default navbar
