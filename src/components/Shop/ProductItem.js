import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { productsActions } from '../../store/product-slice';
import { uiActions } from '../../store/ui-slice';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, price, image, description } = props;
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
      })
    );
  };

  const deleteProductHandler = (id) => {
    dispatch(productsActions.removeProduct(id));
    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Product deleted Successfully!',
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.productImage}>
          <img src={image} alt="product-poster" />
        </div>
        <div className={classes.productDetails}>
          <div className={classes.namePrice}>
            <div>
              <h3>{title}</h3>
            </div>
            <div className={classes.price}>${price.toFixed(2)}</div>
          </div>
          <div className={classes.actions}>
            <p>{description}</p>
          </div>
          <div className={classes.actionButton}>
            <button onClick={() => deleteProductHandler(id)}>
              <RiDeleteBin6Line />
            </button>
            <button onClick={addToCartHandler}>
              <AiOutlinePlusCircle />
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
