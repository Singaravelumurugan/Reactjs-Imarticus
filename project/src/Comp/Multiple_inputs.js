import React from "react";
class Multiple_inputs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            personGoing:true,
            numberOfpersons:5
        };
        this.handleinputChange=this.handleinputChange.bind(this);
    }
    handleinputChange(event){
       const target= event.target;
       const value= target.type === 'checkbox'? target.checked:target.value;
       const name= target.name;
       this.setState({
        [name]:value
       });

    }
    render(){
        return(
            <form>
                <h1>Multiple input Controlled Form Example</h1>
                <label>Is personGoing:
                    <input type="checkbox" name="personGoing" checked={this.state.personGoing}  onChange={this.handleinputChange} />
                </label> <br/>
                <label>Number of Persons:
                    <input type="number" name="numberOfPersong" value={this.state.numberOfpersons} onChange={this.handleinputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Multiple_inputs;
