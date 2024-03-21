import React, { Fragment, useContext } from 'react'
import CartContext from '../Store/CartContext'
import Modal from '../Ui/Modal'

const Cart = (props) => {

  const cartCtx = useContext(CartContext)

  const TotalAmount = cartCtx.medicinesCart.reduce((total, element)=>(
    total + element.quantity * parseInt(element.price)
  ),0)
  // console.log(TotalAmount)
  // console.log(cartCtx.medicinesCart[0].quantity)

  const RemoveItemToCartHandler =(med)=>{
      cartCtx.removeMedicine(med)
  }

  const AddItemToCartHandler =(med)=>{
    cartCtx.addItemsToCart(med)
  }

  return (
    <Modal onClose={props.onCloseHandler}>
          <span>
              <h4>Cart Added Items</h4>
          </span>
      <ul>
          {cartCtx.medicinesCart.map((med)=>
                <li key={med.id}>
                   <span>Name:{med.name}</span>
                    <span>Price:{med.price}</span>
                    <span> x {med.quantity}</span>
                    <button onClick={AddItemToCartHandler.bind(null, med)}>+</button>
                    <button onClick={RemoveItemToCartHandler.bind(null, med)}>-</button>
                </li>
          )}
      </ul>
            <h3>TotalAmount:{TotalAmount}</h3>
     <div>
        <button onClick={props.onCloseHandler}>Close</button>
        <button >Order</button>
      </div>
    </Modal>
  )
}

export default Cart
