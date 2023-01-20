import React, { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(null);

  const addUserHandler = event => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
    }

    if (parseInt(enteredAge) < 1) {
      return setError({
        title: 'Invalid agr',
        message: 'Please enter a valid age (greater than 0).',
      });
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const errorHandler = () => {
    setError(null);
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
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </Wrapper>
  );
};

export default AddUser;
