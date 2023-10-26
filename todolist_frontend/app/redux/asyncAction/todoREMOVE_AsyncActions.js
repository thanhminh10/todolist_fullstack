import {
    getTodoListStarted,
    getTodoListSuccess,
    getTodoListFailure,

  } from "../action/todoCallApi";
  import axios from "axios";
  
  // get user list
  export const REMOVETodoList_byID = (id) => async dispatch => {
    dispatch(getTodoListStarted());
    try {
      dispatch(getTodoListSuccess(id));
    } catch (err) {
      dispatch(getTodoListFailure(err.message));
    }
  }

    


