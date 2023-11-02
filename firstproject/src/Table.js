import React, {Component} from "react";
import ReactTable from"react-table-6";
import "react-table-6/react-table.css"


class Table extends React.Component{
    render(){
        const data=[{name:'Ayaan',age:26},{name:'Peter',age:24},{name:'Parker',age:36},{name:'Tony',age:31},
        {name:'Stark',age:46},{name:'Jack',age:52}]

        const columns=[{Header:'Name',accessor:'name'},{Header:'Age',accessor:'age'}]
        return(
            <div>
                <ReactTable data={data} columns={columns} defaultPageSize={2} pageSizeOptions={[2,4,6]} />
            </div>
        );
    }
}
export default Table;