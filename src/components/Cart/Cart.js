import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props) => {
  const cartItem = (
    <ul className={classes['cart-item']}>
      {[{ id: "C1", name: "Shushi", amount: 2, price: 12.233 }].map((item) => {
        return <li key={Math.random()}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
