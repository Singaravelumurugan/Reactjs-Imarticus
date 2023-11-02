import logo from './logo.svg';
import './App.css';
import Constructor1 from './Comp/Constructor1';
import Uncontrolled from './Comp/Uncontrolled';
import Controlled from './Comp/Controlled';
import Multiple_inputs from './Comp/Multiple_inputs';
import Example from './Comp/Example';
import List from './Comp/List';
import NameList from './Comp/Namelist';
import Menublog from './Comp/Menublog';
import Mycomponent from './Mycomponent';
import CustomTextInput from './Comp/CustomTextInput';
import Header from './Comp/Lifecycle.js/Header';

const data=[
  {id:1, title:'First', content:'Welcome to imarticus!!'},
  {id:2, title:'Second', content:'It is the best reactJS Tutorial!!'},
  {id:3, title:'Third', content:'Here, You can learn all the reactJS Topics!!'}
];
const myList=['Peter','Sachin','Kevin','Dhoni','Alisa'];

function App() {
  return (
    <div className='App'>
    
     <List />
     <NameList myList={myList} />
     <Menublog data={data} />
    <Mycomponent />
    <CustomTextInput />
    <Header favouritecolor="blue" />
    </div>
  );
}

export default App;
