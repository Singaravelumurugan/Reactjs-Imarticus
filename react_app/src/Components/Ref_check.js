import { useEffect,useRef } from "react";

export function Ref_check(){
    const divElement =useRef();
    //trigger on the first render of the component
    useEffect(() =>{
        //get the height of div element
        console.log("The Height of the div Element is: ",divElement.current.offsetHeight);
    },[]);
    return(
        <div ref={divElement}>
            <br/><br/>
        </div>
    )
}