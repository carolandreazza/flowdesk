import React, { useState } from 'react';

interface Todo {
  id: number;
  content: string;
  checked: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [listLength, setListLength] = useState(0);
  const [todoInput, setTodoInput] = useState('');

  const generateTemplate = (todo: string) => {
    const newTodo = {
      id: listLength,
      content: todo,
      checked: false, // Initialize checked property as false
    };
    setListLength(listLength + 1);
    setTodos([...todos, newTodo]);
  };

  const addTodo = () => {
    const trimmedTodo = todoInput.trim();
    if (trimmedTodo.length) {
      generateTemplate(trimmedTodo);
      setTodoInput('');
    }
  };

  const toggleTodoCheck = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="p-4">
      <div className="mb-4 bg-white rounded">
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          className="p-2 rounded mr-2 text-black outline-none"
          placeholder="Add item"
        />
        <button
          type="button"
          onClick={addTodo}
          className="hover:bg-slate-200 text-2xl text-black font-extrabold py-1 px-4"
        >
          +
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-2 my-2 rounded text-black odd:bg-white even:bg-slate-50 ${
              todo.checked ? 'line-through' : ''
            }`}
          >
            <input
              type="checkbox"
              id={`todo_${todo.id}`}
              className="mr-2"
              checked={todo.checked}
              onChange={() => toggleTodoCheck(todo.id)}
            />
            <label
              htmlFor={`todo_${todo.id}`}
              className={`flex-grow cursor-pointer ${
                todo.checked ? 'line-through text-gray-500' : ''
              }`}
            >
              {todo.content}
            </label>
            <button
              className="px-2 text-red-500 font-bold"
              onClick={() => deleteTodo(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
