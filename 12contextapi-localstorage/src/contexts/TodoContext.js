import {createContext, useContext} from "react"
// in the Context i have these values and methods 
// which i will define in the App.jsx
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    // methods of todos 
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


// creating  custom hook called useTodo
export const useTodo = () => {
    return useContext(TodoContext)
}
// so the TodoProvider helps us consume its variables and methods
// in the APP.jsx where we wrapit around the components and so that 
// each components can use whatever method it needs 
export const TodoProvider = TodoContext.Provider