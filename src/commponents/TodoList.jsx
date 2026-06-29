import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <ul className="my-4 flex flex-col items-center">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList