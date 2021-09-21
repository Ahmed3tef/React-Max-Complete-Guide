import React from 'react';
import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (name, age) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, { name, age, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
