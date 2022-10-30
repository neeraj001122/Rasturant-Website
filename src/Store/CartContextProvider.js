import React, {useState} from "react";
import CartContext from "./Cart-context";

const CartContextProvider = (props) => {
  const [items, updatedValue] = useState([])
    const addItemHandler = (item) => {
      updatedValue([...items,item])
      console.log(items)
    }
 
    const removeItemHandler = (id) => {

    }

  const cartContext = {
    items: items,
    totalAmount:0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartContextProvider;
