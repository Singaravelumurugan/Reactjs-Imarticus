import React from "react";

class Constructor1 extends React.Component{
constructor(props){

    super(props);
    this.state ={
        fname:'John'
    }
}
render(){
    return(
        <div>
          <p>Name:{this.state.fname}</p>
           </div>
    );
}
}
export default Constructor1;