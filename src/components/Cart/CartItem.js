import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, quantity, total, price, image } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemToCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
      })
    );
  };

  return (
    <li className={classes.item}>
      <div className={classes.productImage}>
        <img src={image} alt="product-poster" />
      </div>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>${total.toFixed(2)} </div>
        <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
