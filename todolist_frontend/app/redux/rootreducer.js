
import { filterReducer,todoListReducer } from "./reducer"
import {applyMiddleware, combineReducers} from 'redux'
import thunk from "redux-thunk";


const rootReducer =  combineReducers({
    filter: filterReducer,
    todolist: todoListReducer
})





export default rootReducer;