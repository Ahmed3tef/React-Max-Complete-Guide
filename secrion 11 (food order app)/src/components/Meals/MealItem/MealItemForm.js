import './MealItemForm.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react/cjs/react.development';

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const onSubmitHandler = e => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountToNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === '0' ||
      enteredAmountToNumber < 1 ||
      enteredAmountToNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    } else {
      props.onAddToCart(enteredAmountToNumber);
    }


  };

  return (
    <form className='form' onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5)!</p>}
    </form>
  );
}
export default MealItemForm;
