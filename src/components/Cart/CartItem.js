import CartContext from "../../Store/Cart-context";
import { useContext } from "react";
import classes from './Cart.module.css'

const CartItem = () => {
 const cartCtx = useContext(CartContext)
 const remove = (id) => {
  cartCtx.removeItem(id)
}
  return (
    <ul className={classes["cart-item"]}>
      {cartCtx.items.map((item) => {
        return (
          <li key={Math.random()}>
            <div>{item.name} {item.quantity}</div>
            <div>{item.price}</div>
            <button onClick={remove.bind(this, item.id)}> - </button>
            <button onClick={cartCtx.addItem}> + </button>
          </li>
        );
      })}
    </ul>
  );
    }
  export default CartItem;