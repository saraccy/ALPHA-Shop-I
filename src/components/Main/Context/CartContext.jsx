import cartData from "../Cart/CartData";
import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
  const [nowCartData, setNowCartData] = useState(cartData);
  
  function handleMinusClick(id) {
    const updatedCartData = nowCartData.map(item => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setNowCartData(updatedCartData);
  }

  function handlePlusClick(id) {
    const updatedCartData = nowCartData.map(item => {
      if (item.id === id ) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setNowCartData(updatedCartData);
  }
  
  const total = nowCartData.reduce((accumulator, currentValue) => {
      let itemPrice = currentValue.quantity * currentValue.price;
      return accumulator + itemPrice;  
  },0)

  return(
    <CartContext.Provider value={{nowCartData,handleMinusClick, handlePlusClick, total}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;

