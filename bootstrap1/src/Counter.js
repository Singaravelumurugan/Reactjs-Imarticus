import React, {useState} from "react";
function Counter(){
    const [count,setCount]= useState(0);

  function handleClick(){
    setCount(count +1);
  }
    return(
        <div>
            <h1>Count: {count} times!.</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
export default Counter;