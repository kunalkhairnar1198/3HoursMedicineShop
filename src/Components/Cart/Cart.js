import React, {  useContext } from 'react'
import CartContext from '../Store/CartContext'
import Modal from '../Ui/Modal'
import classes from './Cart.module.css'

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
              <h4>ADDED Medicines</h4>
          </span>
        <ul className={classes.list}>
            {cartCtx.medicinesCart.map((med)=>
                  <li className={classes['list-item']} key={med.id}>
                    <h2>{med.name}</h2>
                      <span className={classes.price}>{med.price}</span>
                      <span className={classes.quantity}> x {med.quantity}</span>
                    <div className={classes.actbtn}>
                      <button onClick={AddItemToCartHandler.bind(null, med)}>+</button>
                      <button onClick={RemoveItemToCartHandler.bind(null, med)}>-</button>
                    </div>
                  </li>
            )}
        </ul>

            <div className={classes.total}>
              <span>TotalAmount</span>
              <span> Rs.{TotalAmount}</span>
            </div>
     <div className={classes.actions}>
        <button onClick={props.onCloseHandler}>Close</button>
        <button >Order</button>
      </div>
    </Modal>
  )
}

export default Cart
