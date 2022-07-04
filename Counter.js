import React, { useState } from "react";
import "./Counter.css"

function Counter() {
    
    const [count, setCount] = useState(0)
    
    function increaseCounter() {
        setCount(count + 1)
    }
    
    return (
        <div>
            <div className="box">
                <h1 className="font"> {count} </h1>
            </div>
            <button className="btn" onClick={() => increaseCounter()}> Hit </button>
        </div>
    )

}

export default Counter