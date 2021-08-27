import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/index.scss';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDCtKyMIihrbRII0om88kXe0zOCpu5E3qw',
  authDomain: 'chat-react-6d3a8.firebaseapp.com',
  projectId: 'chat-react-6d3a8',
  storageBucket: 'chat-react-6d3a8.appspot.com',
  messagingSenderId: '1002861479583',
  appId: '1:1002861479583:web:f31bd085bd1fd653cf04aa',
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, auth, firestore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
