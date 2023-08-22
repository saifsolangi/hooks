import React, { useReducer } from 'react'

export default function ReducerHook() {

    const redcucer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1, showText: state.showText }
            case "toggleShowText":
                return { count: state.count, showText: !state.showText }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(redcucer, { count: 0, showText: true })

    return (
        <div>
            <h1>
                {state.count}
            </h1>
            <button onClick={() => {
                dispatch({ type: "increment" });
                dispatch({ type: "toggleShowText" });
            }}>Increment Number</button>
            <h2>
                {state.showText && <h1>Show Text</h1>}
            </h2>
        </div>
    )
}
