import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null)

export default function ContextHook() {
    const [userName, setUserName] = useState("")
    return (
        <AppContext.Provider value={{ userName, setUserName }}>
            <Login /> <User />
        </AppContext.Provider>
    )
}
