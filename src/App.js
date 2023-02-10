import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import AddProduct from './components/Shop/AddProduct';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';
import { fetchProductData } from './store/product-actions';

let isInitialStart = true;

const App = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchProductData());
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitialStart) {
      isInitialStart = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/products" />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/add-products" exact>
            <AddProduct />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
};

export default App;
