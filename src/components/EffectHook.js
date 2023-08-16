import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function EffectHook() {
    const [data, setData] = useState("")
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments/").then((response) => {
            setData(response.data[1].email)
        })
    }, [])

    return (
        <div>
            {data}
        </div>
    )
}
