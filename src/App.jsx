import { useState } from 'react'

import './App.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addtodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput("")
    }
  }


  return (
    <>
      <di className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-400'>
        <div className='bg-slate-50 shadow-lg rounded-3xl p-16'>
          <h2 className='text-3xl font-bold text-center text-gray-850 mb-6'>REACT TODO LIST ✅</h2>

          <div className='flex mb-4'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text' placeholder='Add a new todo' className='flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus-ring-2 focus:ring-blue-500' />
            <button onClick={addtodo} className='bg-blue-600 px-4 py-2 text-white rounded-r-lg hover:bg-blue-700'>ADD</button>
          </div>

          <ul className='space-y-2'>
            {
              todos.map((todo) => (
                <li
                  key={todo.id}
                  className='flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200'>

                  <input type='checkbox'
                    checked={todo.completed}
                    onChange={() => setTodos(
                      todos.map((t) => (
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      ))
                    )}
                    className='mr-2 h-5 w-5 text-blue-600' />
                  <span className={`flex-grow ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}>{todo.text}</span>

                  <button
                    onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                    className='ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600'>Delete</button>
                </li>
              ))
            }
          </ul>
        </div>
      </di>
    </>
  )
}

export default App
