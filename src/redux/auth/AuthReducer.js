import { SET_LOGGEDIN,RESET_LOGGEDIN } from "./AuthTyeps";

const initialState={
    isLogged:true
}
const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_LOGGEDIN:
            return{
                ...state,
                isLogged:true
            }
        case RESET_LOGGEDIN:
            return{
                ...state,
                isLogged:false
            }
        default:
            return state
    }
}

export default authReducer;