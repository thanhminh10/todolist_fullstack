
export const GET_TODO_LIST_STARTED = 'GET_USER_LIST_STARTED';
// get user list - success
export const GET_TODO_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';
// get user list - failure
export const GET_TODO_LIST_FAILURE = 'GET_USER_LIST_FAILURE';


export const getTodoListStarted = () => {
    return {
      type: GET_TODO_LIST_STARTED
    }
  }
  
  // to get the list of users - success
  export const getTodoListSuccess = data => {
    return {
      type: GET_TODO_LIST_SUCCESS,
      payload: {
        data
      }
    }
  }
  
  // to get the list of users - failure
  export const getTodoListFailure = error => {
    return {
      type: GET_TODO_LIST_FAILURE,
      payload: {
        error
      }
    }
  }