import React from "react";
class Container1 extends React.Component{
    constructor(props){
        super(props);
        this.state={show:true};
    }
    delHeader=()=>{
        this.setState({show:false});
    }

    render(){
      let myheader;
      if(this.state.show){
        myheader=<Child />
      };
        return(
            <div>
              {myheader}
                <button type="button" onClick={this.delHeader}>Delete Heade</button>
            </div>
        );
    }
}
class Child extends React.Component{
componentWillUnmount(){
  alert("The Component named Header is about to be Unmounted.")
}
render(){
  return(
    <h1>Hello World!</h1>
  );
}
}
export default Container1;
