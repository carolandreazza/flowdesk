import React, { useState } from 'react';

interface Todo {
  id: number;
  content: string;
  checked: boolean;
}

const CLinks = () => {
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
      <div className="mb-4 rounded">
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          className="p-2 rounded -mr-12 text-white outline-none active:border-0 bg-transparent"
          placeholder="Nome"
        />
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          className="p-2 rounded mr-2 text-white outline-none active:border-0 bg-transparent"
          placeholder="Link"
        />
        <button
          type="button"
          onClick={addTodo}
          className=" text-white font-extrabold py-1 px-4"
        >
          +
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id} 
            className="  group/item bg-zinc-700 flex items-center gap-2 rounded hover:bg-zinc-500/10"
          >
            <a href="https://caroldev.vercel.app/" target='blank'>
             {/*  <input
                type="checkbox"
                id={`todo_${todo.id}`}
                className="mr-2"
                checked={todo.checked}
                onChange={() => toggleTodoCheck(todo.id)}
              /> */}
              <label
                htmlFor={`todo_${todo.id}`}
                className={`flex-grow cursor-pointer ${
                  todo.checked ? 'line-through text-gray-500' : ''
                }`}
              >
                {todo.content}
              </label>
              <button
                className="group/edit invisible group-hover/item:visible absolute px-2 pl-96 font-bold"
                onClick={() => deleteTodo(todo.id)}
              >
                X
              </button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CLinks;
