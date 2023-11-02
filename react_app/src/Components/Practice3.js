
import React, {useState} from "react";
function Exam(){
    const [exam,setExam]= useState({
        test:"Nil",
        questions: "0",
        students:"0"
    });
    function handleEvent(){
      setExam({  test:"Programming Quiz",
      questions: "10",
      students:"30"});
    }
    return(
        <div>
            <h1>Test: {exam.test}</h1>
           <p>Questions: {exam.questions} Students: {exam.students}</p>
           <button onClick={handleEvent}> Click</button>
        </div>
    )
}
export default Exam;