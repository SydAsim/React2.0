import  { useState } from 'react'
import { TodoProvider } from './contexts'

function App() {
   const [todos , setTodos] = useState([])

  // 1: addTodo functionality
  //  we have to define the values same as it was in the context
   const addTodo = (todo) => {
    // we cannot setthe todo directly cause it will remove the prev one so instead
    setTodos((prev)=>[{id:Date.now() ,todo:{} , ...todo},...prev]}
   }


  // 2: updatedTodo functionality
   const updatedTodo = (id , todo) =>{
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo 
      : prevTodo)))
   }

  // prev.map((eachval) =>{
  //   if(eachval.id === id)
  //     todo 
  //   else prevTodo
  // })


  // 3: deleteTodo functionality
  const deleteTodo = (id)=>{
    setTodos ((prev)=> prev.filter((prevtodo)=> prevtodo.id !== id))
  }
  

  // 4: toggleComplete functionality
  const toggleComplete=  (id)=>{
    setTodos(
      (prev)=> prev.map((prevTodo)=> 
      prevTodo.id === id ? {...prevTodo , completd: !prevTodo.completd}
    : prevTodo))

  }


  return (
    <TodoProvider value={{todos ,addTodo ,updatedTodo ,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 

                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}


