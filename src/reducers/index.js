import { combineReducers } from "redux"
//  to avoind naming conflicts - rename reducer to formReducer
import {reducer as formReducer} from "redux-form"
// add auth reducers
import authReducer from "./authReducer"
import errorReducer from "./errorReducer"
// add TodoReducer
import {TodoListReducer} from "./todoReducer"



export default combineReducers({
    form:formReducer,
    authReducer,
    errorReducer,
    todos:TodoListReducer,
});