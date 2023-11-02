import React from "react";
function home() {
    return (
      <div className="App">
                    <h1>Welcome to the React Family</h1>
                    Username: <input type="text" name="username" value="username"/>
                    <h3>Adding Two Numbers: 10+20={10+20}</h3>
                   {/*interpolation*/}
      </div>
    );
  }
  export default home;