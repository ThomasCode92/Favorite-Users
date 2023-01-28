import React, { Fragment, useContext } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AuthContext from './contexts/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
