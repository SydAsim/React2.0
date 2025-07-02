import { createContext ,useContext } from "react";

// in the Context i have these values and methods 
// which i will define in the App.jsx
export const Todocontext = createContext({
    todos : [
    {
        id : 1,
        todo : 'todo msg',
        completed : false,
    }
] ,

  addTodo : (todo)=>{},
  updatedTodo : (id ,todo) => {},
  deleteTodo : (id) =>{},
  toggleComplete : (id) =>{}

})


export const useTodo =  ()=>{
    return useContext(Todocontext)
}

export const  TodoProvider = Todocontext.Provider