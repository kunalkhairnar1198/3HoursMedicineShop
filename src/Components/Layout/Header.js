import React, { Fragment, useContext } from 'react'
import CartContext from '../Store/CartContext'

const Header = (props) => {
  const cartCtx = useContext(CartContext)
  console.log(cartCtx)

  const numberOfItems = cartCtx.medicinesCart.length;
  
  console.log('execute')
  return (
    <Fragment>
      <div>
          <span>Medicine Shop</span>
      </div>
      <button onClick={props.onShowCartHander}>
        <span>YOURCART {numberOfItems}</span>
        </button>
    </Fragment>
  )
}

export default Header
