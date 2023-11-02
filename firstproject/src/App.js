import logo from './logo.svg';
import './App.css';
import {createMuiTheme} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'; 
import { Button, Typography } from '@material-ui/core';
 import purple from '@material-ui/core/colors/purple';
 import green from '@material-ui/core/colors/green';

 const theme= createMuiTheme({
  palette:{
    primary:{ 
    main: purple[500],
  },
  secondary: {
    main: green[500],
  },
},
typography: {
  h3: {
    fontSize: '3rem',
    fontWeight: 300,
    fontFamily: 'Roboto, sans-serif',
  },
}
 });
{/*}
 import green from '@material-ui/core/colors/green';
import React, { Component } from "react";
import Container1 from './Container1';
import Component_update from './Component_update';
import Snapshot from './Snapshot';
import ComponentUpdate from './ComponentUpdate';
import Table from './Table';
*/}
function App() {
  return (
<div className="App-header">

<center>

<ThemeProvider theme={theme}>

<Typography variant="h3">Theming Example</Typography>

<Button variant="contained" color="primary" style={{margin: "10px"}}>

Click Here!

</Button>

<Button variant="contained" color="secondary" style={{margin: "10px"}}>

Click Here!

</Button>

</ThemeProvider>

</center>

</div>
  );
}
export default App;
