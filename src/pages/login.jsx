import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import createSessionCookie from '../helpers/createSessionCookie';

const Login = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const email = inputRef.current.value;
    createSessionCookie(email);
  };

  return (
    <Container className="login-container">
      <Row>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>e-post adresse</Form.Label>
            <Form.Control type="email" placeholder="skriv inn e-post" ref={inputRef} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
            Logg inn
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Login;
