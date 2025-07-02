import React from 'react'
import UserContext from './UserContext'

// so the concept of the {children} is same as the 
// outlet as described in the outlet where the header and footer was
// constant across pages and then we just had to use that page

const UserContextProvider =  ({children}) =>{
    const [user , setUser] = React.useState(null)
    return (
        <UserContext.Provider value = {{user , setUser}}>
        {children}
        
        </UserContext.Provider>
    )

}

export default UserContextProvider