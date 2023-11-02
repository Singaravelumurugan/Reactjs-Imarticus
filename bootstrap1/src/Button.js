import React, {Component} from "react";

class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            message:"Default Content"
        }
    }
    render(){
        return(
            <div>
            <div className="h1 bg-secondary text-white text-center p-2">
                {this.state.message}
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={() => this.setState({message:"Clicked!."})}>
                    Cliked Me!
                </button>
            </div>
            </div>
        );
    }
}
export default Button;