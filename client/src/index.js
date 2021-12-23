import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/auth';

import { FIREBASE_CONFIG } from './util/constants';

import './scss/index.scss';

firebase.initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();

export const Context = createContext(null);

const socket = new WebSocket('ws://localhost:5000');

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, auth, socket }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
