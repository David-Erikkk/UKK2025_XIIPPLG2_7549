import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavbarEnhance() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#" >To-Do List</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Button variant="outline-success" href="/login">Login</Button>
          <Button variant="outline-info" href="/registrasi">Registrasi</Button>
          <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Today</NavDropdown.Item>
              <NavDropdown.Item href="#action4">This Week</NavDropdown.Item>
              <NavDropdown.Item href="#action4">This Month</NavDropdown.Item>
              <NavDropdown.Item href="#action4">All Tasks</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Week</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Fun</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
         
          <Nav.Link href="#" disabled>
            
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
