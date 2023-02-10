import classes from './AddProduct.module.css';
import React from 'react';
import Card from '../UI/Card';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../store/form-slice';
import { productsActions } from '../../store/product-slice';
import { uiActions } from '../../store/ui-slice';
import { Redirect } from 'react-router-dom';

const AddProduct = () => {
  const dispatch = useDispatch();

  const { title, price, image, description } = useSelector(
    (state) => state.form
  );

  const handleTitleChange = (event) => {
    dispatch(formActions.changeTitle(event.target.value));
  };
  const handlePriceChange = (event) => {
    const price = parseInt(event.target.value) || 0;
    dispatch(formActions.changePrice(price));
  };
  const handleDescriptionChange = (event) => {
    dispatch(formActions.changeDescription(event.target.value));
  };
  const handleImageChange = (event) => {
    dispatch(formActions.changeImage(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      productsActions.addProduct({
        title,
        price,
        image,
        description,
      })
    );
    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Added Product Successfully!',
      })
    );
    <Redirect to="/products" />;
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        {/* title */}
        <div className={classes.title}>
          <label>Product Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        {/* price */}
        <div className={classes.price}>
          <label>Product Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price..."
            value={price || ''}
            onChange={handlePriceChange}
          />
        </div>
        {/* description */}
        <div className={classes.description}>
          <label>Product Decription</label>
          <input
            type="text"
            name="description"
            placeholder="Description..."
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        {/* image */}
        <div className={classes.image}>
          <label>Product Image Link</label>
          <input
            type="text"
            name="image"
            placeholder="Image Source..."
            value={image}
            onChange={handleImageChange}
          />
        </div>
        <button>Add Product</button>
      </form>
    </Card>
  );
};

export default AddProduct;
