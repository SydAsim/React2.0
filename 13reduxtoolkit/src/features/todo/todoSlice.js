import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState  = {
    todos: [{id: 1 , text: "Hello "}],
}

export const  todoSlice = createSlice({
    name: 'todos',
    initialState ,
    // in reducers we notonly decalre function 
    // but also describe the functions 
    reducers:{
    // every function has 2 things in Redux it is just a syntax state and action
    addTodo : (state ,action)=>{
        const todo = {
            id: nanoid(),
            text: action.payload
        }
        state.todos.push(todo)
    },


    removeTodo :(state , action)=>{
        // we have to remove the todo so 
        state.todos = state.todos.filter((todo)=>
             todo.id !== action.payload)
    },


    // add update todo 
    updateTodo :(state , action)=>{
     const {id , newText} = action.payload
     state.todos = state.todos.map(
        todo=> todo.id === id ? 
        {...todo ,text: newText} : todo
    
     
     )
    }
    }
})

// now we have to export the functionalilty Individually it will 
// help us in components
export const {addTodo ,removeTodo ,updateTodo } = todoSlice.actions

// but the Store also need awareness of all these reducers as well 
export default todoSlice.reducer
