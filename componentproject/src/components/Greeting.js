import React from 'react';
import '../App.css';

class Greeting extends React.Component{
    state ={ //state having the data's are inside the clss
        name:"Hello World",
        id:2,
        contact:9843446641
    }
    render(){
        return(
            <div className='App-header'> 
            <h1>Name: {this.state.name}</h1>
            <h2>Id: {this.state.id}</h2>
            <h3>Contact: {this.state.contact}</h3>

            </div>
        )
    }
}
export default Greeting;