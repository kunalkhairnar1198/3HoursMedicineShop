

import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const [medicinesCart, setMedicineCart] = useState([])
    const [addMedData, setAddMedData] = useState([
        {
            id: 1,
            name: 'Parasetomoal',
            description:'Detail of medicine',
            price: '500',
            quantity:10
        },
        {
            id: 2,
            name: 'Parasetomoal',
            description:'Detail of medicine',
            price: '500',
            quantity:20
        }
    ])


    const addMedicineItems=(newItem)=>{
        setAddMedData([...addMedData, newItem])
        // setMedicineCart(newItem)
    }

    const addItemsToCart =(newItem)=>{
        const medicineItemIndex = addMedData.findIndex((item)=> item.id === newItem.id)
        const medicineItem = addMedData[medicineItemIndex]
        console.log('======',medicineItem)

        if(medicineItem.quantity === 0){
            // console.log('empty cart is not found')
            return
        }else{
            const updatedMedicine = {...medicineItem, quantity:medicineItem.quantity - 1}
            const updatedMedItems =[...addMedData]
            // console.log(updatedMedItems)
            updatedMedItems[medicineItemIndex] = updatedMedicine;
            setAddMedData(updatedMedItems)
        }

            setMedicineCart([...medicinesCart, newItem])

        const existingItemIndex = medicinesCart.findIndex((item)=> item.id === newItem.id)
        const existingItem = medicinesCart[existingItemIndex]

        if(existingItem){
            const updatedItem ={
                ...existingItem,
                quantity:existingItem.quantity + 1
            }

            const updatedCart = [...medicinesCart]
            updatedCart[existingItemIndex]=updatedItem
            setMedicineCart(updatedCart)
        }else{
            const updatedItem={
                ...newItem,
                quantity:1
            }
            const updatedCart =[...medicinesCart, updatedItem]
            setMedicineCart(updatedCart)
        }

    }

    const removeMedicine =(removeMed)=>{
        console.log(removeMed)
        const medicineItemIndex = addMedData.findIndex((item)=> item.id === removeMed.id)

        const medicineItem = addMedData[medicineItemIndex]
        const updatedMedItem = {
            ...medicineItem,
            quantity:medicineItem.quantity + 1
        }
        const updatedMediItems =[...addMedData]
        updatedMediItems[medicineItemIndex] = updatedMedItem
        setAddMedData(updatedMediItems);

    const deleteItemIndex = medicinesCart.findIndex((item) => item.id === removeMed.id);
    if(removeMed.quantity === 1){
        const updatedMedItem = medicinesCart.filter((item)=> item.id !== removeMed.id)
        setMedicineCart(updatedMedItem)
    }else{
        const updatedMedItems ={
            ...removeMed,
            quantity: removeMed.quantity - 1
        }
        const updatedMedCart =[...medicinesCart]
        updatedMedCart[deleteItemIndex] = updatedMedItems;
        setMedicineCart(updatedMedCart)
    }

    }

    const contextObject ={
        medicinesCart,
        addMedData,
        addMedicineItems,
        addItemsToCart,
        removeMedicine,
    }

    return (
    <CartContext.Provider value={contextObject}>
    {props.children}
    </CartContext.Provider>      
  )
}

export default CartProvider
