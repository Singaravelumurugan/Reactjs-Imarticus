import React, {Component} from "react";
class Property extends Component{
    render(){
        return(
            <div>
                <h1>Default Props Example</h1>
                <h3>Welcome to {this.props.name}</h3>
                <p>Imarticus is the one of the best Java training 
                    institue in Coimbatore.Because, They are teaching is next level.
                </p>
                <p>Location is {this.props.location}</p>
            </div>
        )
    }
}
Property.defautProps ={ //defaultProps having the data values are outside the class
    "name": "Imarticus",
    "location":"Coimbatore"
}
export default Property;