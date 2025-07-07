import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [update, setUpdate] = useState('')
  const [id, setId] = useState(null)

  const updateTodoHandler = () => {
    if (!id || update.trim() === '') return

    dispatch(updateTodo({ id, newText: update }))
    setUpdate('')
    setId(null)
  }

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {id === todo.id ? (
              <>
                <input
                  className="text-black px-2 py-1 rounded"
                  value={update}
                  onChange={(e) => setUpdate(e.target.value)}
                />
                <button
                  onClick={updateTodoHandler}
                  className="text-white bg-green-600 px-2 py-1 ml-2 rounded"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setId(todo.id)
                      setUpdate(todo.text)
                    }}
                    className="text-white bg-yellow-500 px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
