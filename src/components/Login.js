import React, { useContext } from 'react'

import { AppContext } from './ContextHook'

export default function Login() {
    const { setUserName } = useContext(AppContext)

    return (
        <div>
            <input onChange={(event) => {
                setUserName(event.target.value)
            }} />
        </div>
    )
}
