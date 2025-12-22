import {useState} from "react";
import "./App.css";
import Modal from "./components/Modal/Modal.jsx";
import Toast from "./components/Toast/Toast.jsx";


export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  
  const [toast, setToast] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  
  const handleAddOrUpdate = () => {
    if (!input.trim()) return;
    
    if (editId) {
      setTodos(
        todos.map(todo =>
          todo.id === editId ? {...todo, text: input} : todo
        )
      );
      setToast("Məlumat yeniləndi");
      setEditId(null);
    } else {
      setTodos([...todos, {id: Date.now(), text: input}]);
      setToast("Məlumat əlavə edildi");
    }
    
    setInput("");
  };
  
  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };
  
  const openDeleteModal = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };
  
  const confirmDelete = () => {
    setTodos(todos.filter(todo => todo.id !== deleteId));
    setShowModal(false);
    setDeleteId(null);
    setToast("Məlumat silindi");
  };
  
  return (
    <div className="app">
      <h2>Smart Todo App</h2>
      
      <div className="input-group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tapşırıq yaz..."
        />
        <button className="btn primary" onClick={handleAddOrUpdate}>
          {editId ? "Yenilə" : "Əlavə et"}
        </button>
      </div>
      
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <div>
              <button className="btn edit" onClick={() => handleEdit(todo)}>Edit</button>
              <button className="btn delete" onClick={() => openDeleteModal(todo.id)}>Sil</button>
            </div>
          </li>
        ))}
      </ul>
      
      {toast && <Toast message={toast} onClose={() => setToast("")}/>}
      {showModal && (
        <Modal
          onCancel={() => setShowModal(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}
