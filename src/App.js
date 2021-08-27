import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRoute from './components/AppRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoute />
    </BrowserRouter>
  );
};

export default App;
