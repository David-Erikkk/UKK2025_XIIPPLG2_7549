import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function NavbarEnhance() {
  return (
    <Navbar expand="lg" className=" h-full">
    <Container fluid className='d-flex flex-column  h-full'>
      <Navbar.Brand href="#" >To-Do List</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        
        <Nav
          className="me-auto my-2 my-lg-0 d-flex flex-column "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Button variant="success" href="/login" className='mb-2 '>Login</Button>
          <Button variant="dark" href="/registrasi" className='mb-2'>Registrasi</Button>
          <Button variant="danger" href="/logout" className='mb-2 mt-4'>Log Out</Button>
          { <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Today</NavDropdown.Item>
              <NavDropdown.Item href="#action4">This Week</NavDropdown.Item>
              <NavDropdown.Item href="#action4">This Month</NavDropdown.Item>
              <NavDropdown.Item href="#action4">All Tasks</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Week</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Fun</NavDropdown.Item>
              
            </NavDropdown> }
         
        <Form className="d-flex flex-column mt-5">
          <Form.Control
            type="search"
            placeholder="Search....."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="primary" className='mt-2'>🔎</Button>
        </Form>

        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
