import React, { useState } from 'react'

const UseState = () => {

    const [Counter, setCounter] = useState(0)
    const [Text, setText] = useState("Enter Name");

    const Increment = () => {
        setCounter(Counter + 1)
    }

    const Decrement = () => {
        setCounter(Counter - 1)
    }

    const ChangeText = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <h2 style={{ backgroundColor: "red", display: "inline-block", padding: "10px", borderRadius: "10px" }}>Use State Hook</h2>
            <div className="row">
                <div className="col d-flex p-4">
                    <button onClick={Decrement}>-</button>
                    <p className='mx-5'>{Counter}</p>
                    <button onClick={Increment}>+</button>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <input type="text" onChange={ChangeText} />
                    <p>{Text}</p>
                </div>
            </div>
        </>
    )
}

export default UseState