import React, { Component } from "react";
 class ComponentUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state={favoritecolor:"red"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"Yellow"})
        },5000)
    }
    componentDidUpdate(){
        document.getElementById("mydiv").innerHTML="The updated favorite is "+this.state.favoritecolor;
    }
    render(){
        return(
            <div>
                <h1>My favorite Color is {this.state.favoritecolor}</h1>
             <div id="mydiv"></div>
            </div>
        )
    }
}
export default ComponentUpdate;