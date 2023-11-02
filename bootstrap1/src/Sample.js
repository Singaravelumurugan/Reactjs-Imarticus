import React, {useState} from "react";
function Sample(){
    const [name,name1]= useState('Kathir');
    return(
        <div>
            <h1>{name}</h1>
            <button type="button" onClick={()=> name1('Joshua')}>Click</button> <br/><br/>
            <button type="button" onClick={()=> name1('Tony Stark')}>Click</button> <br/><br/>
            <button type="button" onClick={()=> name1('Peter Parker')}>Click</button>
        </div>
    )
}
export default Sample;