import React, { Fragment, useState } from 'react';

import AddUser from '../Users/AddUser';
import UsersList from '../Users/UsersList';

const Home = props => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList(prevState => {
      const userId = Math.random().toString();
      const user = { id: userId, name: username, age };
      return [...prevState, user];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
};

export default Home;
