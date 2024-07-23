import React from "react";

function MYDemo(props) {
    return (
        <>
            <p id="demo"></p>
            <input type="text" id="new"></input>
            <button onClick={() => {
                let val = document.getElementById("new").value;
                document.getElementById("demo").innerHTML = val;
            }}>click to add</button>
            {/* <h1>Hello {props.message}</h1> */}
        </>
    )
}
export default MYDemo;