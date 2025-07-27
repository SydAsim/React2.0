import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    status : false ,
    userData : null

}

const authSlice  = createSlice ({
    name : "auth",
    initialState,
    reducers :{
        login :(state ,action)=>{
            state.status = true
            state.userData = action.payload.userData
        },
        logout : (state )=>{
            state.status = false
            state.userData = null
        }

    }
})

export const {login ,logout}  = authSlice.actions

export default authSlice.reducer


// state refers to the current data or "halat" (حال) of that particular slice of the application.
// It's read-only by default, and can only be changed via reducers.

// ✅ What is action.payload?
// An action is a plain JS object that describes what happened.

// It usually looks like:

// {
//   type: 'auth/login',
//   payload: { name: 'Asim', email: 'a@example.com' }
// }
// // action.payload is the data being sent to update the state.

// In this function:

// login: (state, action) => {
//   state.status = true;
//   state.userData = action.payload;
// }
// You are:
// Setting status to true (user is logged in)
// And putting the actual user data (e.g. name, email, etc.) into userData using action.payload

