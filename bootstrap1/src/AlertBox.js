import React from "react";
import { Alert,Button } from "react-bootstrap";

class AlertBox extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            show:true
        };
        this.handleDimiss = this.handleDimiss.bind(this);
            this.handleShow = this.handleShow.bind(this);
    }
    handleDimiss(){
        this.setState({show:false})
    }
    handleShow(){
        this.setState({show:true})  
    }
    render(){
        if(this.state.show){
            return(
                <>
                <Alert bsStyle="danger" onDimiss={this.handleDimiss}>
                    <h4>Oops! you got an error</h4>
                    <p>Change this and try again. This is Alert Box Example in reactJs.</p>
                    <p>
                    <Button onClick={this.handleDimiss}>HideAlert</Button>
                    </p>
                </Alert>
                </>
            )
        }
        return <Button onClick={this.handleShow}>ShowAlert</Button>
    }
}
export default AlertBox;