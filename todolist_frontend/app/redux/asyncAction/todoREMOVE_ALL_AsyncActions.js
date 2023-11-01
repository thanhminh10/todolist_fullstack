import {
    removeAllTodoListStarted,
    removeAllTodoListFailure,
    removeAllTodoListSuccess,

  } from "../action/todoCallApi";
  import axios from "axios";
  
  // get user list
  export const REMOVETodoList_ALL = () => async dispatch => {
    dispatch(removeAllTodoListStarted());
    try {
      await axios.delete(`https://localhost:7290/v1/api/Todo/`)
      dispatch(removeAllTodoListSuccess());
    } catch (err) {
      dispatch(removeAllTodoListFailure(err.message));
    }
  }

    


