import React from 'react'
import { NavLink } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const TabMenu = () => {
    return (
        <div className='navbar'>
        <div className='nav_brand'>
        <NavLink exact activeClassName='active_class'  className='nav_item' to='' >Shree Store</NavLink>
        </div>
        <div className='nav'>
        <NavLink exact activeClassName='active_class'  className='nav_item' to='' >Men</NavLink>
        <NavLink exact activeClassName='active_class' className='nav_item' to='' >Women</NavLink>
        <NavLink exact activeClassName='active_class' className='nav_item' to='' >Kids</NavLink>
        <NavLink exact activeClassName='active_class' className='nav_item' to='' >Teenage</NavLink>
        <NavLink exact activeClassName='active_class' className='nav_item' to='' ><AddShoppingCartIcon/> </NavLink>
        </div>
            
        </div>
    )
}

export default TabMenu
