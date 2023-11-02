import React from "react";
class Example2 extends React.Component{
    state ={
        name:"Tony Stark",
        age:45,
        location:"UK"
    }
    handleEvent =()=>{
        this.setState({name:"Captain America",age:71});
    }
    render(){
        return(
            <div>
                <h1> Welcome to the class Component</h1>
                <h2>Name is  {this.state.name},<br/> Age is {this.state.age} , location is {this.state.location}</h2>
                <button onClick={this.handleEvent}>Click to Change </button>
            </div>
        )
    }
}
export default Example2;