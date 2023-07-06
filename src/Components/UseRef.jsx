import React, { useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef(null);

    const focusBtn = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <h2 style={{ backgroundColor: "red", display: "inline-block", padding: "10px", borderRadius: "10px" }}>Use Ref Hook</h2>

            <input type="text" placeholder='type anything here' ref={inputRef} />
            <button onClick={focusBtn}>Focus Button To Input</button>
        </>
    )
}

export default UseRef