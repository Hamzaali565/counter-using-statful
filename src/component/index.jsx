import React from "react";
import { useState } from "react";
import './index.css'
const Counter = () => {
    let [isLit, setLit] = useState(1);

    // https://michalsnik.github.io/aos/
    return (
        <div className="main">
<h1 className="head">Counter App</h1>
            <div className="numCen">{isLit}</div>

            <div className="buttons">
            <button onClick={() => {
                setLit(isLit + 1)
            }}>Add</button>

            <button onClick={() => {
                setLit(isLit - 1)
            }}>Sub</button>
</div>
        </div>
    )

}
export default Counter;