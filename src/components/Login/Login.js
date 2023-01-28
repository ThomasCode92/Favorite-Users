import React, { useContext, useEffect, useReducer, useState } from 'react';

import AuthContext from '../../contexts/auth-context';

import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input';
import classes from './Login.module.css';

const emailReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { value: action.payload, isValid: action.payload.includes('@') };
    case 'INPUT_BLUR':
      return { value: state.value, isValid: state.value.includes('@') };
    default:
      return { value: '', isValid: false };
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };
    case 'INPUT_BLUR':
      return { value: state.value, isValid: state.value.trim().length > 6 };
    default:
      return { value: '', isValid: false };
  }
};

const Login = () => {
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity...');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('Cleanup...');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = event => {
    dispatchEmail({ type: 'USER_INPUT', payload: event.target.value });
  };

  const passwordChangeHandler = event => {
    dispatchPassword({ type: 'USER_INPUT', payload: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = event => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
