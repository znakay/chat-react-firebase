import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Context } from '..';
import firebase from 'firebase';

const Login = () => {
  const { auth } = useContext(Context);
  
  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  return (
    <div className="form__wrapper">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
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
