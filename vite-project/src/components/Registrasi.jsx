
// Register.js:
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Registrasi() {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [namalengkap, setNamalengkap] = useState('');
  const [alamat, setAlamat] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Register attempted with:', { email, password, username, namalengkap, alamat });
    // Here you would typically send a request to your server
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4" >Registrasi</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
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

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Username"
                value={password}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNamaLengkap">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="namalengkap"
                placeholder="Nama lengkap"
                value={password}
                onChange={(e) => setNamalengkap(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAlamat">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                type="alamat"
                placeholder="Alamat"
                value={password}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Registrasi
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registrasi;