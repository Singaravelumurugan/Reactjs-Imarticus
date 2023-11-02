//Creating a functional component and add a state 
import React,{useState} from "react";
function Example1(){
    const [count,setCount]= useState(0);
    function handleEvent(){
        setCount(count+1);
    }
    function doubleEvent(){
        setCount(count+2);
    }
    return (
        <div> 
            <h1>Welcome to the Functional Component</h1>
            <h2>Count = {count}</h2>
            <h3>setCount= {count+1}</h3>
            <button onClick={handleEvent}> Single Count</button> <br/>
            <br />
            <button onClick={doubleEvent}>Double Count</button>

        </div>
    )
}
export default Example1;