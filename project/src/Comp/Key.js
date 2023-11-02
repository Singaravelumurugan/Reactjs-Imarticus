import React from "react";

const stringLists = ['Peter','Sachin','Kevin','Dhoni','Albido'];
const updateList =stringLists.map((strList)=>{
    <li key={strList.id}>{strList}</li>
})
