import React, { useContext } from 'react'
import CartContext from '../Store/CartContext'



const Medicines = (props) => {

    const cartCtx = useContext(CartContext)
        
    const addToCart =(med)=>{
        console.log(med)
        cartCtx.addItemsToCart(med)
    }

     const listOfMedicine =  cartCtx.addMedData.map((med)=>
            <li key={med.id}>
                Name:{med.name}
                Description:{med.description}
                Price: {med.price}
                Quantity:{med.quantity}
                <button onClick={addToCart.bind(null, med)}>Add To Cart</button>
            </li>
    )
console.log(cartCtx.addMedData[0].quantity)
return (
    <section>
        <h1>Medicine Data Show</h1>
        <ul>
            {listOfMedicine}
        </ul>
    </section>
  )
}

export default Medicines
