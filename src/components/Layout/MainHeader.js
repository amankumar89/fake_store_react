import { NavLink } from 'react-router-dom';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>Fake Ecommerce</h1>
      <ul className={classes.pagelinks}>
        <li>
          <NavLink to="/products" children="Products" />
        </li>
        <li>
          <NavLink to="/add-products" children="Add Products" />
        </li>
      </ul>
      <nav>
        <ul>
          <li>
            <NavLink to="/cart">
              <CartButton />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
