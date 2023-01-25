import React, { Fragment, useRef, useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
  const [error, setError] = useState(null);

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = event => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Year)</label>
          <input id="age" type="number" ref={ageInputRef} step="1" />
          <Button type={'submit'}>Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
