import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

const Header = () => {
  const user = false;

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          {user ? (
            <Button variant="primary" className="button button_header">
              Log In
            </Button>
          ) : (
            <Button variant="primary" className="button button_header">
              Log Out
            </Button>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
