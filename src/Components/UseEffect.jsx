import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [data, setdata] = useState("")
    const [count, setcount] = useState(0)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setdata(response.data[1].email)
            console.log("Api Called")
        })
    }, [])

    const Increment = () => {
        setcount(count + 1)
    }


    return (
        <>
            <h2 style={{ backgroundColor: "red", display: "inline-block", padding: "10px", borderRadius: "10px" }}>Use Effect Hook</h2>
            {data}
            <button onClick={Increment}>increment</button>
            {count}
        </>
    )
}

export default UseEffect