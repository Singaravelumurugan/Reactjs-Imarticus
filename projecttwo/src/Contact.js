import React from "react";


const divstyle ={
    color:'blue',
    FontFace:'bold',
    fontSize:30,

};
function Contact(){
    
        return(
            <div style={divstyle}>
                <h3>Contact Module</h3>
                <h4 style={{color:'red',fontSize:30}}>Module</h4>
                <h5 style={{color:'green',fontSize:30}}>Learn more</h5>
            </div>
        );
}
export default Contact;