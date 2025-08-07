/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react'

// This is a context provider for user authentication and data management
// It will be used to manage user state and provide it to the rest of the app
export const UserDataContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        fullName:{
            firstName: '',
            lastName: ''
        },
        email: '',
    })

    return (
        <div>
            <UserDataContext.Provider value={{user, setUser}}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContext
