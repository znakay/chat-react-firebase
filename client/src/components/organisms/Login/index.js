import React, { useContext, useState } from 'react';
import { Context } from '../../../index';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { SIGN_UP_ROUTE } from '../../../util/constants';

import './index.scss';

const Login = () => {
  const { auth } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginWithPassword = async (e) => {
    e.preventDefault();
    const provider = new firebase.auth().signInWithEmailAndPassword(email, password);
    const user = await provider;
    console.group('sign in with pass');
    console.log(user.user);
    console.groupEnd();
  };

  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.group('sign in with google');
    console.log(user);
    console.groupEnd();
  };

  return (
    <section className="login">
      <div className="container login__container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div className="form__wrapper">
              <form className="form form_sign-in">
                <input
                  className="form__input"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="button button_submit" type="submit" onClick={loginWithPassword}>
                  Sign in
                </button>
              </form>
              <button className="button button_google" onClick={loginWithGoogle.bind(null)}>
                Sign in with Google
              </button>
              <Link to={SIGN_UP_ROUTE} className="button button_sign-up">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
