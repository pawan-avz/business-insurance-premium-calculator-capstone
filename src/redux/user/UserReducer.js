import {
  FETCH_USER_REQUEST ,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  RESET_USER_REQUEST
} from "./UserType";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    case RESET_USER_REQUEST:
      return{
        loading:false,
        users:[],
        error:""
      }
    default:
        return state;
  }
};

export default userReducer;