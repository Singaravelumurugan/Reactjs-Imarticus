const initialState={
    message: "Subscribe to imarticus learning"
};

const reducer= (state =initialState,action) =>{
    const newState={...state}; //...state = state tree= state management
    if (action.type === "Message_Change")
    newState.message="Thank You for Subscribing";
return newState;
};
export default reducer;