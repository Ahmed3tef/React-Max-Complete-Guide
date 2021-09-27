import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import './MealItem.css';
import MealItemForm from './MealItemForm';

function MealItem({ meal }) {
  const ctx = useContext(CartContext);

  const price = `$${meal.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    ctx.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };

  return (
    <li className='meal'>
      <div>
        <h3>{meal.name}</h3>
        <div className='description'>{meal.description}</div>
        <div className='price'>{price}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
