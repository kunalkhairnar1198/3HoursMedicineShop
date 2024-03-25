import React, { Fragment, useContext, useState } from 'react';
import CartContext from '../Store/CartContext';
import classes from './Medicineform.module.css'
const Medicineform = () => {
  const [medicName, setMedicName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('1'); 

  const cartCtx = useContext(CartContext);

  const medNameChangeHandler = (event) => {
    setMedicName(event.target.value);
  };

  const descChangeHandle = (event) => {
    setDescription(event.target.value);
  };

  const priceChangeHandle = (event) => { 
    setPrice(event.target.value);
  };

  const quantChangeHandle = (event) => {
    setQuantity(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      id: Math.random().toString(),
      name: medicName,
      description: description,
      price: +price, 
      quantity: +quantity 
    };

    cartCtx.addMedicineItems(enteredData);
    
    setMedicName('');
    setDescription('');
    setPrice('');
    setQuantity('1');
  };

  return (
    <Fragment>
      <form className={classes.container} onSubmit={SubmitHandler}>
        <label>Name</label>
        <input type='text' placeholder='Enter med name' value={medicName} onChange={medNameChangeHandler}/>
        <label>Description</label>
        <input type='text' placeholder='Enter med description' value={description} onChange={descChangeHandle} />
        <label>Price</label>
        <input type='number' placeholder='Enter med price' value={price} onChange={priceChangeHandle} />
        <label>Quantity</label>
        <input type='number' value={quantity} onChange={quantChangeHandle}/>
        <button>Add Medicine</button>
      </form>
    </Fragment>
  );
}

export default Medicineform;
