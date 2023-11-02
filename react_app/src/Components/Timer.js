import React,{useEffect, useState} from "react";

function Timer(){
    const [count,setCount]= useState(0);
    useEffect(()=>{
       count<5 && setTimeout(()=>{
            setCount( count+1);
        },1000)
    })
    return(
        <>
        <h1>useEffect Example</h1>
        <h2>I hvae rendered {count} Times!.</h2>
        </>
    )
}
export default Timer;