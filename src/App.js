import React from 'react';

import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

function App() {
  const users = [];

  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;
