import image from"./Vector.png";

function Background(){
    return(
        <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",
         backgroundSize:"contain", height:1000,width:1000}}>Hello World</div>
    )
}
export {Background};