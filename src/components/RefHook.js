import React, { useRef } from 'react'

export default function RefHook() {
    const inputRef = useRef(null)

    const inputGame = () => {
        // inputRef.current.value = "";
        inputRef.current.focus()
    };

    return (
        <div>
            <h1>Saify</h1>
            <input type='text' placeholder='Ex....' ref={inputRef} />
            <button onClick={inputGame}>Change Name</button>
        </div>
    )
}
