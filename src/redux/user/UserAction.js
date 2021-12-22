

import { FETCH_USER_REQUEST ,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE,RESET_USER_REQUEST} from "./UserType"
import { setLoggedIn } from "../auth/AuthAction"


import axios from 'axios'

export const fetchUsersRequest=()=>{
    return{
        type:FETCH_USER_REQUEST 
    }
}
export const fetchUserSuccess=(users)=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
export const fetchUserFailure=(error)=>{
    return {
        type:FETCH_USERS_FAILURE ,
        payload:error
    }
}
export const resetUserRequest=()=>{
  return{
    type:RESET_USER_REQUEST,

  }
}



