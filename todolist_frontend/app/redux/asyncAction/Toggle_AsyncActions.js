import {
    toggleTodoListStarted,
    toggleTodoListFailure,
    toggleTodoListSuccess,

  } from "../action/todoCallApi";
  import axios from "axios";
  
  // get user list
  export const Toggle_byID = (data) => async dispatch => {
    dispatch(toggleTodoListStarted());
    try {
      
      dispatch(toggleTodoListSuccess(data.data))
      await axios.put(`https://localhost:7290/v1/api/Todo/toggle/${data.todo_id}`,data.data)
    } catch (err) {
      dispatch(toggleTodoListFailure(err));
    }
  }

    


