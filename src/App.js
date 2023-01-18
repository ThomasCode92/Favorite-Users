import React, { useState } from 'react';

import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList(prevState => {
      const userId = Math.random().toString();
      const user = { id: userId, name: username, age };
      return [...prevState, user];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
