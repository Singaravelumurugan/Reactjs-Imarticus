import React from "react";
class Uncontrolled extends React.Component{
    constructor(props){
        super(props);
        this.updateSubmit=this.updateSubmit.bind(this);
        this.input=React.createRef();
    }
    updateSubmit(event){
        alert("you have enterd the Username and Company name Successfully.");
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.updateSubmit}>
                <h1>Uncontrolled Form Example</h1>
                <label>Name:
                    <input type="text" ref={this.input} />
                </label>
                <label>
                    Company Name:
                    <input type="text" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Uncontrolled;