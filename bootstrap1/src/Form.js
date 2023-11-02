import React, {Component} from "react";
import Insert from './Insert';
import Show from './Show';
import { Form } from 'react-bootstrap';


class from extends Component{
    constructor(props){
        super(props);
        this.state= {
            FormData: {}
        }
    }
    submitData = (newData) =>{
        this.setState({FormData: newData});
    }
    render(){
        return  (
        <div className="container-fluid">
            <h1>Form Example</h1>
            <div className="row">
                <div className="col-12">
                    <Insert submit ={this.submitData} />
                </div>
                <div className="col-12">
                    <Show data={this.state.FormData} />
                </div>
            </div>
        </div>
        );
    }
}
export default Form;