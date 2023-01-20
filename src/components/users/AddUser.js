import React, { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = event => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;

    if (parseInt(enteredAge) < 1) return;

    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = event => {
    const username = event.target.value;
    setEnteredUsername(username);
  };

  const ageChangeHandler = event => {
    const age = event.target.value;
    setEnteredAge(age);
  };

  return (
    <div>
      <ErrorModal title="An erro occured!" message="Something went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            step="1"
            onChange={ageChangeHandler}
          />
          <Button type={'submit'}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
