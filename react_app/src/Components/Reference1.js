import { useState, useEffect } from "react";

export default function Reference1(){
    //create a counter
    const [counter, setCounter] =useState(0);

    //increase the counter by one
    const handleIncreaseCounter =()=>{
        setCounter( counter+1);
    };

    useEffect(() => {
        console.log("counter changed to: ", counter);
    },[counter]);
    return(
        <div>
            <h1> Learn about useRef!</h1>
            <h2> Value: {counter.current} </h2>
            <button onClick={handleIncreaseCounter}> Increase Counter</button>
        </div>
    )
}