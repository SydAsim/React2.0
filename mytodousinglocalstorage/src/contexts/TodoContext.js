import React from 'react';
import { createContext, useContext } from 'react'

export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo Msg",
            copeleted: false
        }
    ],

    addTodo: (todo) => { },
    updateTodo: (todo, id) => { },
    deleteTodo: (id) => { },
    compelettoggle: () => { }

})


export const useTodo = () => {
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider