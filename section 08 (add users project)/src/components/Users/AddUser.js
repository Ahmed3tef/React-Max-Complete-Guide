import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import './AddUser.css';

function AddUser(props) {
  const [userName, setuserName] = useState('');
  const [userAge, setuserAge] = useState('');
  const [error, setError] = useState();

  const adUserHandler = e => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    console.log(userAge, userName);
    props.onAddUser(userName, userAge);
    setuserName('');
    setuserAge('');
  };

  const userNameChangeHandler = e => {
    setuserName(e.target.value);
  };
  const userAgeChangeHandler = e => {
    setuserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className='input'>
        <form onSubmit={adUserHandler}>
          <label>
            User Name{' '}
            <input
              type='text'
              onChange={userNameChangeHandler}
              value={userName}
            />
          </label>
          <label>
            age{' '}
            <input
              type='number'
              onChange={userAgeChangeHandler}
              value={userAge}
            />
          </label>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
