import React from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcone";

const CartButton = () => {
  return (
    <div>
      <button className={classes.button}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
      </button>
    </div>
  );
};

export default CartButton;
