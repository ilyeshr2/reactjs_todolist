import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    'Go to the gym',
    'Eat more fruits and veggies',
    'Pick up the kids from school'
  ]);

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDelTodos(delTodo) {
    const newTodoList = todos.filter(todo => todo !== delTodo);
    setTodos(newTodoList);
  }

  return (
    <div>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} handleDelTodos={handleDelTodos} />
    </div>
  );
}

export default App;
