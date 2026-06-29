import React, { useState } from 'react'

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(todo)
    setTodo("")
  }

  return (
    <form className="flex items-center gap-3 justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-64 bg-transparent border-b border-gray-400 py-2 px-1 outline-none text-gray-800 placeholder:text-gray-400 focus:border-black transition-colors"
      />
      <button
        type="submit"
        className="w-10 h-10 bg-gray-600 rounded-md text-white text-2xl flex items-center justify-center"
      >
        +
      </button>
    </form>
  )
}

export default TodoForm