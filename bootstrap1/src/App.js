
import './App.css';

import { Form } from 'react-bootstrap';

function App() {
 {/*} const checkboxes =['JAVA','React.Js','Git','MongoDB'];

  const [checkedState,setCheckedState] =useState(
    new Array(checkboxes.length).fill(false)
  );
  const handleCheckboxChange =(index) =>{
    const updatedCheckedState = checkedState.map((item,idx) =>
    idx === index ? !item:item
    );
    setCheckedState(updatedCheckedState);
  };

  const countCheckedCheckboxes =() =>{
    return checkedState.filter(Boolean).length;
  };
*/}
  return (
    <div className="App">
     {/* <h1>Select the course  You Want to Learn</h1>
      <Checklist checkboxes={checkboxes}
      checkedState={checkedState}
      handleCheckboxChange={handleCheckboxChange}
      />
      <p>Number of Checked CheckBoxes:
      <strong>{countCheckedCheckboxes()}</strong>
      </p>
     }  <ThemeSwitcher />
      <Sample />
      <Car />
      <Timer />
      <Button />
  
        <Timer />

  <Counter />
  <MouseEvent />
   
  <h1>Select the course  You Want to Learn</h1>
  <Checkboxlist checkboxes={checkboxes} />
  <Checklist />
 
   <TableForm />
    */}
    <Form />
    </div>
  );
}

export default App;
