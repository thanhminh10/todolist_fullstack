import {
    getTodoListStarted,
    getTodoListSuccess,
    getTodoListFailure,
    postTodoListStarted,
    postTodoListSuccess,
    postTodoListFailure,
  } from "../action/todoCallApi";
  import axios from "axios";
  
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

  // Add Todo async Action

  export const postTodoList = (data) => async dispatch => {
    dispatch(postTodoListStarted());

      try {
          await axios.post('https://localhost:7290/v1/api/Todo',data)
          dispatch(postTodoListSuccess(data));
      } catch (err) {
        postTodoListFailure(err)
      }
  }
    


