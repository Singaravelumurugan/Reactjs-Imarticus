
import React,{useState} from "react";
function Practice2(){
    const [name,setName]= useState('kathir');
    function handleEvent(){
        setName("Tony");
    }
    return (
        <div> 
            <h2>Name is {name}</h2>
            <button onClick={handleEvent}> Click Here</button>
        </div>
    )
}
export default Practice2;