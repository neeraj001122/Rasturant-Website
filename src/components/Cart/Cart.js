import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../Store/Cart-context";
import { useContext } from "react";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
   let totalAmount = 0;
  cartCtx.items.forEach(element => {
    totalAmount=totalAmount+element.price*Number(element.quantity);
  });

  return (
    <Modal onClose={props.onClose}>
      <CartItem ></CartItem>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{Math.round(totalAmount)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button-alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
