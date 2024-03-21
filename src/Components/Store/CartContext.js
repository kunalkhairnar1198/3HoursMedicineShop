import React, { createContext } from "react";

const CartContext = createContext({
    medicinesCart:[],
    addMedData:[],
    addItemsToCart:()=>{},
    addMedicineItems:()=>{},
    removeMedicine: ()=>{},
})

export default CartContext;