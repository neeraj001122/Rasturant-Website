import React, {useState} from "react";
import CartContext from "./Cart-context";

const CartContextProvider = (props) => {
  const [items, updatedValue] = useState([])
    const addItemHandler = (item) => {
      const newArray = [...items]
      let hasItem = false;
     newArray.forEach((iitem, index) => {
      if(iitem.id === item.id)
      {
        hasItem=true;
        newArray[index].quantity = newArray[index].quantity+item.quantity
      }
     })
     if(hasItem === true)
     {
       updatedValue(newArray)
     }
     else{
      updatedValue([...items,item])
     }
     
    }
   
    const removeItemHandler = (id) => {
     const newArray1 = [...items]
     let  removequantity = false;
      items.forEach((item,index) => {
        if(item.id === id)
        {
           removequantity = true;
           newArray1[index].quantity = newArray1[index].quantity-1;
        }
      })
      if(removequantity === true)
      {
        updatedValue(newArray1);
      }
      else{
        updatedValue(items)
      }
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
