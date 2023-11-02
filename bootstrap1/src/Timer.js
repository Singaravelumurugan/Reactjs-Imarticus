import React, {useState, useEffect} from "react";
function Timer(){
    const [count,setCount]= useState(1);

    useEffect(() =>{
     count <5 && setTimeout(() => setCount(count+1),1000);
    }, [count]);
    return(
        <div>
            <h1>I heve rendered {count} times!.</h1>
        </div>
    )
}
export default Timer;
/*
import React, {useState, useEffect} from "react";
function Timer(){
    const [count,setCount]= useState(5);

    useEffect(() =>{
     count >1 && setTimeout(() => setCount(count-1),1000);
    }, [count]);
    return(
        <div>
            <h1>I heve rendered {count} times!.</h1>
        </div>
    )
}
export default Timer;
*/ //Reverse printing