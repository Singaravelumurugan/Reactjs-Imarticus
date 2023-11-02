import React,{useEffect, useState} from "react";

function Counter(){
    const [count,setCount]= useState(0);
    const [calculation,setCalculation]= useState(0);

    useEffect(()=>{
            setCalculation(()=> count*2);
    },[count]); // Add the count variable here
    return(
        <>
        <h4>Count : {count}</h4>
        <button onClick={() => setCount((c) => c+1)}> +</button>
        <p>Calculation : {calculation}</p>
        </>
    )
}
export default Counter;