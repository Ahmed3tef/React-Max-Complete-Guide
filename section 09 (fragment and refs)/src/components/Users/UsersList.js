import Card from '../UI/Card';
import './UsersList.css';

function UsersList(props) {
  return (
    <Card className='users'>
      <ul>
        {props.users.map(user => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
export default UsersList;
