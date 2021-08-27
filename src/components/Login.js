import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Context } from '..';
import firebase from 'firebase';

const Login = () => {
  const { auth } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginWithPassword = async (e) => {
    e.preventDefault();
    const provider =  new firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = await provider.user;
    console.log(user);
  };

  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  return (
    <div className="form__wrapper">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button onClick={loginWithPassword} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button onClick={loginWithGoogle} variant="secondary" type="submit">
        Log in by Google
      </Button>
    </div>
  );
};

export default Login;
