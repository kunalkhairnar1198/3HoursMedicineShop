import { useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Medicineform from './Components/Medicineshop/Medicineform';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
import Medicines from './Components/Medicineshop/Medicines';

function App() {
  const [cartHandle, setCartHandle] = useState(false)
  const showCartHandler =()=>{
    setCartHandle(true)
  }
  const hideCartHandler =()=>{
    setCartHandle(false)
  }

  return (
    <CartProvider>
      <Header onShowCartHander = {showCartHandler}/>
        {cartHandle && <Cart onCloseHandler ={hideCartHandler}/>}
        <main>
            <Medicineform/>
            <Medicines/>
        </main>
    </CartProvider>
  );
}

export default App;
