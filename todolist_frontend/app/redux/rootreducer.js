
import { filterReducer,todoListReducer } from "./reducer"
import {combineReducers} from 'redux'



const rootReducer =  combineReducers({
    filter: filterReducer,
    todolist: todoListReducer
})

export default rootReducer;