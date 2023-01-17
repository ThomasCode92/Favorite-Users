import React, { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = event => {
    event.preventDefault();

    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = event => {
    const username = event.target.value;
    setEnteredUsername(username);
  };

  const ageChangeHandler = event => {
    const age = parseInt(event.target.value);
    setEnteredAge(age);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Year)</label>
        <input id="age" type="number" step="1" onChange={ageChangeHandler} />
        <Button type={'submit'}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
