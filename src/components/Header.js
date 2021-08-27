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
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          {user ? (
            <Button onClick={auth.signOut()} variant="primary" className="button button_header">
              Log Out
            </Button>
          ) : (
            ''
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
