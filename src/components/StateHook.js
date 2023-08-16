import React from 'react'
import { useState } from 'react';

export default function StateHook() {
    // let counter = 0;

    let [counter, setCounter] = useState(0)
    const incrementNumber = () => {
        setCounter(counter + 1)
        console.log(counter)
    }
    return (
        <div>
            {counter} <button onClick={incrementNumber}>Increment</button>
        </div>
    )
}
