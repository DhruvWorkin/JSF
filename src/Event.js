import React from "react";
import "./Events.css"
function Events() {
    function print(event){
        console.log("Key pressed: " + event.key);
    }
    return (
        <>
            <input onKeyDown={(event)=>{print(event)}} onKeyUp={(event)=>{print(event)}}/>
            <div id="keyboard"></div>                
            
        </>
    )
}
export default Events;