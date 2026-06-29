import React, { useState } from 'react'

function TodoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.todo)

  const handleSave = () => {
    editTodo(todo.id, editText)
    setIsEditing(false)
  }

  return (
    <li className="flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 my-1 w-64">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border-b border-gray-400 outline-none flex-1"
          />
        ) : (
          <span className={todo.completed ? "line-through text-gray-400" : "text-gray-800"}>
            {todo.todo}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {isEditing ? (
          <button onClick={handleSave} className="text-green-600 font-bold">
            ✓
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-gray-500 hover:text-black">
            ✎
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="text-gray-500 hover:text-black font-bold">
          ×
        </button>
      </div>
    </li>
  )
}

export default TodoItem