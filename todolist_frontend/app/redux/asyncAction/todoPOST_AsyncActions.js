import {
    postTodoListStarted,
    postTodoListSuccess,
    postTodoListFailure,
  } from "../action/todoCallApi";
  import axios from "axios";
  

export const postTodoList = (data) => async dispatch => {
    dispatch(postTodoListStarted());

      try {
          await axios.post('https://localhost:7290/v1/api/Todo',data)
          dispatch(postTodoListSuccess(data));
      } catch (err) {
        postTodoListFailure(err)
      }
  }