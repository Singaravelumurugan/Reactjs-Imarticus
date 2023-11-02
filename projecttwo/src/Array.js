function Array(){
    const items = ['Pen','Book','Table','Board','Board'];
    return(
        <div>
            <ul>
                {items.map((item,i) =>(
                    <li key="{i}">{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default Array;
