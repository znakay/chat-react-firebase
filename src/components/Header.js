import React, { useContext } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';

const Header = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Live Chat</Navbar.Brand>
          {user ? (
            <Button onClick={() => auth.signOut()} variant="primary" className="button button_header">
              Sign Out
            </Button>
          ) : (
            <Button variant="primary" className="button button_header">
              Sign up
            </Button>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
