export const loginInitial={
    email:'',
    password:""
}
export const loginReducer=(state,action)=>{
    switch(action.type){
        case'change':
        return({
            ...state,[action.key]:action.payload
        })

        default:
            return state;
    }
    return state;
}