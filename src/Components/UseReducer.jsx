import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }

        case "toggleText":
            return { count: state.count, showText: !state.showText }

        default:
            break;
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

    return (
        <>
            <h2 style={{ backgroundColor: "red", display: "inline-block", padding: "10px", borderRadius: "10px" }}>Use Reducer Hook</h2>

            <div className="row">
                <div className="col text-center">
                    <p>{state.count}</p>
                    <button onClick={() => {
                        dispatch({ type: "INCREMENT" })
                        dispatch({ type: "toggleText" })
                    }}>Increment</button>
                    {state.showText && <p>This is some text</p>}
                </div>
            </div>
        </>
    )
}

export default UseReducer