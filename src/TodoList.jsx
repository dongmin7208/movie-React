import './App.css';
import { useState } from 'react';
function TodoList() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo('');
    // setTodos(function(currentArray){
    //   return ;
    // }
  };

  console.log(toDos);
  return (
    <div>
      <h1>ToDo List({toDos.length})</h1>
      <form action='' onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          placeholder='todo?'
          type='text'
        />
      </form>
      <button>Add To Do</button>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default TodoList;
