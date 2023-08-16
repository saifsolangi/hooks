import React, { useState } from 'react'
import Login from './Login'
import User from './User'


export default function ContextHook() {

    const [userName, setUserName] = useState("")

    return (
        <div>
            <Login setUserName={setUserName} />
            <User username={userName} />
        </div>
    )
}
