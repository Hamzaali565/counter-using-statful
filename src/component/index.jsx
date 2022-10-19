import { logDOM } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import './index.css'
const Counter = () => {
    let [isLit, setLit] = useState(1);
    let [bri, noBri] = useState(true);
    const Change = ()=>{
        noBri(!bri)
    } 
    // https://michalsnik.github.io/aos/ 
    return (
        <div className={`${(bri) ? "main" : "main1"}`}>
<h1 className={`${(bri) ? "head" : "head1"}`}>Counter App</h1>
<button onClick ={Change} className="butt">change mode</button>

            <div className={`${(bri) ? "numCen" : "numCen1"}`}>{isLit}</div>

            <div className={`${(bri) ? "buttons" : "buttons1"}`}>
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