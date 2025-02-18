
import NavbarEnhance from './components/NavbarEnhance';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function App() {
  return (
    <>
    <NavbarEnhance/>

    

   <h1 style={{
    color:"skyblue",
    textAlign:"center",
    marginTop:"5rem"
   }}>To-Do List</h1>  

   <Form className="d-flex">
          <Form.Control
            type="Add"
            placeholder="Add New"
            className="me-2"
            aria-label=""
          />
          <Button variant="primary">Add</Button>
        </Form>
    </>

  );
}

export default App;