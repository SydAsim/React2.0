import {configureStore} from '@reduxjs/toolkit'
import  todoReducer, { todoSlice }  from '../features/todo/todoSlice'

export const store = configureStore({
    reducer : todoReducer
})


// A Redux store is an object that:
// Holds the entire application state in one place.
// Provides methods to access state (getState()).
// Allows dispatching actions (dispatch(action)).
// Registers listeners via subscribe() for state changes.

