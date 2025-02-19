import { useState } from 'react';
// import Tambahugas from './Tambahtugas';
// import Tugas from './Tugas';
import NavbarEnhance from './NavbarEnhance'

const Home = () => {
  const [tasks, setTasks] = useState([]);


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
        <h1>To-Do List</h1>
        {/* <Tambahtugas onAdd={handleAddTask} /> */}
        <div style={styles.taskList}>
          {/* {tasks.map((task) => (
            <Tugas key={task.id} task={task} onEdit={handleEditTask} onDelete={handleDeleteTask} />
          ))} */}
          
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: { display: "flex", height: "100vh", backgroundColor: "#80C4E9" },
  sidebar: { width: "200px", padding: "20px", backgroundColor: "#D9EAFD", color: "white" },
  main: { flex: 1, padding: "20px" },
  taskList: { marginTop: "20px", display: "grid", gap: "10px" },
};

export default Home;