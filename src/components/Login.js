import React from 'react'

export default function Login(props) {
    return (
        <div>
            <input onChange={(event) => {
                props.setUserName(event.target.value)
            }} />
        </div>
    )
}
