function Example(){
            // const isLoggedIn=this.state.isLoggedIn; // stste is not defined
        const isLoggedIn=false;
        return(
            <div>
                Welcome{
                    isLoggedIn?'Back':'Please Login first'}
            </div>
        )
    }
export default Example;