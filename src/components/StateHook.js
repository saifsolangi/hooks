import React from 'react'
import { useState } from 'react';

export default function StateHook() {
    // let counter = 0;

    let [counter, setCounter] = useState(0)
    const incrementNumber = () => {
        setCounter(counter + 1)
        console.log(counter)
    }

    const showText = (event) => {
        setInputVal(event.target.value)
    }
    // let inputVal = "Saify"

    const [inputVal, setInputVal] = useState("saify")
    return (
        <>

            {/* example 1 */}
            <div>
                {counter} <button onClick={incrementNumber}>Increment</button>
            </div>


            {/* example 2 */}
            <br />
            <div>
                <input type='text' placeholder='type something...' onChange={showText} /><br />
                {inputVal}
            </div>

        </>
    )
}
