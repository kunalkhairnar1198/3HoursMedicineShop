import React, {  useContext } from 'react'
import CartContext from '../Store/CartContext'
import classes from './Header.module.css'

const Header = (props) => {
  const cartCtx = useContext(CartContext)
  console.log(cartCtx)

  const numberOfItems = cartCtx.medicinesCart.length;
  
  // console.log('execute')
  return (
    <div className={classes.header}>
        
        <h1>Medicine Shop</h1>

         <button onClick={props.onShowCartHander}>
        <span>YOUR CART {numberOfItems}</span>
        </button>
    </div>
  )
}

export default Header
