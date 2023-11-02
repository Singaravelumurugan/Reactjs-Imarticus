import { useState } from "react";
import { Table } from "react-bootstrap";
import AlertBox from "./AlertBox";

function TableForm(){
    const [name,setName] = useState("React Table Example");
    return(
            <>
        <TableForm />
        <thead>
<tr>
    {name}
</tr>
<tr>
<th>#</th>

<th>FirstName</th>

<th>LastName</th>

<th>UserName</th>

</tr>

</thead>

<tbody>

<tr>

<td>1</td>

<td>Mark</td>

<td>Antony</td>

<td>@man</td>

</tr>

<tr>

<td>2</td>

<td>Jacob</td>

<td>Thornton</td>

<td>@mdo</td>

</tr>
 <tr>
<td>3</td>
<td colSpan="2">Larry the Bird</td>
<td>@twitter</td>
</tr>
</tbody>
        <Table />
        <AlertBox />
        </>
    )
}
export {TableForm};