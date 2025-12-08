import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodoName, setNewTodoName] = useState("");
  const [isCurrentlyEdit, setIsCurrentlyEdit] = useState(false);
  const [editTodoIndex, setEditTodoIndex] = useState(false);

  const addNewTodo = () => {
    if (!newTodoName.trim()) return;
    setTodoList((prev) => [...prev, newTodoName]);
    setNewTodoName("");
  };

  const editTodo = () => {
    setTodoList((prev) => {
      let newArr = [...prev];
      newArr[editTodoIndex] = newTodoName;
      return newArr;
    });
    setIsCurrentlyEdit(false);
    setNewTodoName("");
  };
  return (
    <>
      <div>
        <input
          className='new-todo-input'
          type='text'
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        {isCurrentlyEdit ? (
          <button className='new-todo-btn' onClick={editTodo}>
            Submit
          </button>
        ) : (
          <button className='new-todo-btn' onClick={addNewTodo}>
            Add
          </button>
        )}
      </div>
      <div className='todo-items'>
        {todoList.map((todo, index) => (
          <div className='todo-item'>
            <span>{todo}</span>
            <button
              className='edit-todo-btn'
              onClick={() => {
                setIsCurrentlyEdit(true);
                setEditTodoIndex(index);
                setNewTodoName(todo);
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
