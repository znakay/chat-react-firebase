import React, { useState } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../util/constants';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const signUpWithPass = async (e) => {
    e.preventDefault();

    const provider = new firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = await provider;
    user.user.updateProfile({
      displayName: userName,
    });

    console.group('sign up with pass');
    console.log(user);
    console.groupEnd();
  };

  return (
    <div className="container">
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
                type="text"
                placeholder="User name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
              className="form__input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button button_submit" type="submit" onClick={signUpWithPass}>
                Sign up
              </button>
            </form>
            <Link to={LOGIN_ROUTE} className="button">Back to login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;