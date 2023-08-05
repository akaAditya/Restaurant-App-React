import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCntx.items.map((item) => {
          return (
            <CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity}/>
            // <li>
            //   Name: {item.name} Price: {item.price} Quantity={item.quantity}
            // </li>
          );
      })}
    </ul>
  );
  const totalPrice = () => {
    let sumOfPrice = 0;
    cartCntx.items.map((item) => {
      return sumOfPrice += item.price;
    });
    return sumOfPrice.toFixed(2);
  };

  const isItems = cartCntx.items.length>0;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice()}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {isItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
