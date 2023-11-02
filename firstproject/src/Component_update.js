import React from "react";
class Component_update extends React.Component{
    constructor(props){
        super(props);
        this.state={favoritecolor:"red"};
    }
    shouldComponentUpdate(){
        return true;
    }
    changecolor=()=>{
        this.setState({favoritecolor:"blue"});
    }
    render(){
        return(
            <div>
                <h1>My favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changecolor}>Change Color</button>
            </div>
        )
    }
}
export default Component_update;