//import { useState } from 'react';
import NavbarEnhance from './NavbarEnhance'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

const Home = () => {
  //const [tasks, setTasks] = useState([]);


  // const handleAddTask = (newTask) => {
  //   setTasks([...tasks, newTask]);
  // };

  // const handleEditTask = (id, updatedTitle, updatedCategory, updatedDeadline, updatedStatus, updatedDifficulty) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id
  //         ? { ...task, title: updatedTitle, category: updatedCategory, deadline: updatedDeadline, status: updatedStatus, difficulty: updatedDifficulty }
  //         : task
  //     )
  //   );
  // };
  // const handleDeleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
       <NavbarEnhance/>
      </aside>

      <main style={styles.main}>
        <h1 > To-Do List</h1>
        {/* <Tambahtugas onAdd={handleAddTask} /> */}
        <div style={styles.taskList}>
          {/* {tasks.map((task) => (
            <Tugas key={task.id} task={task} onEdit={handleEditTask} onDelete={handleDeleteTask} />
          ))} */}

<Accordion>
  <h5 className="mt-5">Name Product</h5>
      <Accordion.Item eventKey="0" className="mt-3">
        <Accordion.Header>NIKE High Air Jordan 1  </Accordion.Header>
        <Accordion.Body>
          STOCK 17
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="mt-2">
        <Accordion.Header>NIKE High Air Jordan 1 x Travis Scott</Accordion.Header>
        <Accordion.Body>
          STOCK 13
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="mt-2">
        <Accordion.Header>NIKE High Air Jordan 1 x Dior</Accordion.Header>
        <Accordion.Body>
          STOCK 5
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="mt-2">
        <Accordion.Header>NIKE High Air Jordan 1 Royal Blue</Accordion.Header>
        <Accordion.Body>
          STOCK 9
        </Accordion.Body>
      </Accordion.Item>
</Accordion>
 <Form>
      {['Today',].map((type) => (
        <div key={`default-${type}`} className="mt-5">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={` ${type}`}
          />
        </div>
      ))}
    </Form>
          
          
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: { display: "flex", height: "100vh", backgroundColor: "#A1E3F9" },
  sidebar: { width: "200px", padding: "20px", backgroundColor: "#D9EAFD", color: "white" },
  main: { flex: 1, padding: "20px" },
  taskList: { marginTop: "20px", display: "grid", gap: "10px" },
};

export default Home;