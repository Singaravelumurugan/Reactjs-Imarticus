import React, {Component} from "react";
import { Connect, connect } from "react-redux";

class NewComp extends Component{
    styles={
        fontStyle:"italic",
        color:"Purple"
    };

    render(){
        return(
            <div className="App">
                <h3 style={this.styles}> {this.props.message}</h3>
                <button onClick={this.props.Buttonchange}>Subscribe</button>
            </div>
        );
    }   
}
const mapStateProps = state =>{
    return{
        message: state.message
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        Buttonchange: () => dispatch ({ type: "Message_Change"})
    };
};
export default connect(
    mapStateProps,
    mapDispatchToProps
) (NewComp);