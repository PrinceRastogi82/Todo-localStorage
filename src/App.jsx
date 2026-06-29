import React, { useState, useEffect } from 'react'
import TodoForm from './commponents/TodoForm'
import TodoList from './commponents/TodoList'

function App() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos")
    return stored ? JSON.parse(stored) : []
  })
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const addTodo = (text) => {
    if (!text.trim()) return
    const newTodo = { id: Date.now(), todo: text, completed: false }
    setTodos((prev) => [newTodo, ...prev])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const editTodo = (id, newText) => {
    if (!newText.trim()) return
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, todo: newText } : item
      )
    )
  }

  const remainingCount = todos.filter((item) => !item.completed).length

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="my-4 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Your To Do</h1>

        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />

        <p className="text-sm font-semibold mt-3 text-center">
          Your remaining todos: {remainingCount}
        </p>
      </div>
    </div>
  )
}

export default App