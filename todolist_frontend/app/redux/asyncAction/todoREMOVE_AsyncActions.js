import {
    removeTodoListFailure,
    removeTodoListStarted,
    removeTodoListSuccess,

  } from "../action/todoCallApi";
  import axios from "axios";
  
  // get user list
  export const REMOVETodoList_byID = (id) => async dispatch => {
    dispatch(removeTodoListStarted());
    try {
      await axios.delete(`https://localhost:7290/v1/api/Todo/${id}`)
      dispatch(removeTodoListSuccess(id));
    } catch (err) {
      dispatch(removeTodoListFailure(err.message));
    }
  }

    


