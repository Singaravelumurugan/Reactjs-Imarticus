import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={favouritecolor:"red"};
    }
            componentDidMount(){
                setTimeout( () =>{
                    this.setState({favouritecolor:"Yellow"})
                },5000)
            }

    
    render(){
        return(
            <div> 
                <h1>Lifecycle Components</h1>
            <h1>My favourite color is {this.state .favouritecolor} </h1>
            </div>
        );
    }
}
export default Header;