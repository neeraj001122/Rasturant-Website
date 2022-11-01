import React, {useContext} from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcone";
import CartContext from "../../Store/Cart-context";

const CartButton = (props) => {

  const cartCtx = useContext(CartContext);
  let count = 0
   cartCtx.items.forEach((item) => {
     count = count+Number(item.quantity);
  })

  return (
    <div>
      <button onClick={props.onclick} className={classes.button}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{count}</span>
      </button>
    </div>
  );
};

export default CartButton;
