import {
    updateTodoListStarted,
    updateTodoListFailure,
    updateTodoListSuccess,

  } from "../action/todoCallApi";
  import axios from "axios";
  
  // get user list
  export const Update_byID = (data) => async dispatch => {

    dispatch(updateTodoListStarted());
    try {
      
      dispatch(updateTodoListSuccess(data.data))
      console.log(`https://localhost:7290/v1/api/Todo/Update/${data.updateid}`);
      await axios.put(`https://localhost:7290/v1/api/Todo/Update/${data.updateid}`,data.data)
    } catch (err) {
      dispatch(updateTodoListFailure(err));
    }
  }

    


