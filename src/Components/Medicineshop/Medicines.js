import React, { useContext } from 'react'
import CartContext from '../Store/CartContext'
import Card from '../Ui/Card'
import classes from './Medicines.module.css'


const Medicines = (props) => {

    const cartCtx = useContext(CartContext)
        
    const addToCart =(med)=>{
        console.log(med)
        cartCtx.addItemsToCart(med)
    }

     const listOfMedicine =  cartCtx.addMedData.map((med)=>
            <Card>
                <li className={classes.med} key={med.id}>
                 <div className={classes.name}> Name:{med.name}</div>  
                 <div className={classes.description}> Description:{med.description}</div>
                 <div className={classes.price}>Price: {med.price}</div>
                 <div className={classes.quantity}>Quantity:{med.quantity} </div>  
                    
                   <div className={classes.action}>
                        <button onClick={addToCart.bind(null, med)}>Add To Cart</button>
                    </div>
                </li>
            </Card>
    )
// console.log(cartCtx.addMedData)
return (
    <section className={classes.medicine}>
        <h1>Medicine Data Show</h1>
        <ul>
            {listOfMedicine}
        </ul>
    </section>
  )
}

export default Medicines
