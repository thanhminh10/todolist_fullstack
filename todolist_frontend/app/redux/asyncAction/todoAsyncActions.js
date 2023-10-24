import {
    getTodoListStarted,
    getTodoListSuccess,
    getTodoListFailure,
  } from "../action/todoCallApi";
  
  // get user list
  export const getTodoList = () => async dispatch => {
    dispatch(getTodoListStarted());
    try {
      const res = await fetch(`https://localhost:7290/v1/api/Todo`);
      const data = await res.json();
      
      dispatch(getTodoListSuccess(data));
    } catch (err) {
      dispatch(getTodoListFailure(err.message));
    }
}
