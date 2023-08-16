import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'




export default function MemoHook() {

    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)

    let apiData = useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email)
                console.log("api called")
            })
    }, [])
    const callMemo = useMemo(() => apiData, [data])
    return (
        <div>
            <p>{data}</p>

            <button onClick={() => setToggle(!toggle)}>Toggle Now</button>{toggle && <h1>Toggle</h1>}

        </div>
    )
}
