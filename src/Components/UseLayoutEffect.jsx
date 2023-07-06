import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {

    const inputRef = useRef(null)

    useLayoutEffect(() => {    //Faster Than UseEffect
        console.log(inputRef.current.value);
    }, [])

    useEffect(() => {
        inputRef.current.value = "Hello"
    }, [])

    return (
        <>
            <h2 style={{ backgroundColor: "red", display: "inline-block", padding: "10px", borderRadius: "10px" }}>Use Layout Effect Hook</h2>
            <input type="text" value="JOE" width={50} height={50} ref={inputRef} />
        </>
    )
}

export default UseLayoutEffect