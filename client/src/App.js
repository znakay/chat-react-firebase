/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoute from './AppRoute';
import { Context } from '.';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Loader } from './components/atoms';
import { Header } from './components/organisms';

const App = () => {
  const { auth } = useContext(Context);
  const loader = useAuthState(auth)[1];

  if (loader) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Header />
      <AppRoute />
    </BrowserRouter>
  );
};

export default App;
