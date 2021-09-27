import { Fragment } from 'react';

import mealsImg from '../../assets/meals.jpg';
import CartButton from './CartButton';
import classes from './Header.module.css';

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='meals' />
      </div>
    </Fragment>
  );
}

export default Header;
