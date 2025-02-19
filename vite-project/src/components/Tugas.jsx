import { useState } from "react";

const Tugas = ({ tugas, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDeadline, setUpdatedDeadline] = useState(task.deadline);
  const [updatedStatus, setUpdatedStatus] = useState(task.status);
  const [updatedCategory, setUpdatedCategory] = useState(task.category);
  const [updatedDifficulty, setUpdatedDifficulty] = useState(task.difficulty);

  const handleSave = () => {
    onEdit( updatedTitle, updatedCategory, updatedDeadline, updatedStatus, updatedDifficulty);
    setIsEditing(false);
  };

  return (
    <div style={{
      padding: "15px",
      borderRadius: "8px",
      backgroundColor: "white",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px"
    }}>
      {isEditing ? ( 
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
          <select value={updatedCategory} onChange={(e) => setUpdatedCategory(e.target.value)}>
          <option value="School">School</option>
          <option value="Important">Important</option>
          <option value="Work">Work</option>
          </select>
          <input type="date" value={updatedDeadline} onChange={(e) => setUpdatedDeadline(e.target.value)} />
          <select value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)}>
            <option value="Belum Selesai">Belum Selesai</option>
            <option value="Selesai">Selesai</option>
          </select>
          <select value={updatedDifficulty} onChange={(e) => setUpdatedDifficulty(e.target.value)}>
            <option value="bukan prioritas">bukan prioritas</option>
            <option value="prioritas sedang">prioritas sedang</option>
            <option value="prioritas utama">prioritas utama </option>
          </select>
          <button onClick={handleSave} style={styles.saveButton}>Simpan</button>
        </div>,
      ) 
      : (
        
     )}
     

      {/* <div>
        {!isEditing  (
          <>
            <button
              onClick={() => setIsEditing(true)}
              style={styles.editButton}>
              Edit
            </button>
            <button
              onClick={() => onDelete(tugas.id)}
              style={styles.deleteButton}>
              Delete
            </button>
          </>
        )}
      </div> */}
    </div>
  );
};

const styles = {
  editButton: {
    padding: "8px",
    backgroundColor: "#FFD700",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px",
  },
  deleteButton: {
    padding: "8px",
    backgroundColor: "#FE5050",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  saveButton: {
    padding: "8px",
    backgroundColor: "#32CD32",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "5px",
  }
};

export default Tugas;