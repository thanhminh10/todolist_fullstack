import { 
  GET_TODO_LIST_STARTED,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_FAILURE,
  POST_TODO_LIST_STARTED,
  POST_TODO_LIST_SUCCESS,
  POST_TODO_LIST_FAILURE,
  REMOVE_TODO_LIST_STARTED,
  REMOVE_TODO_LIST_SUCCESS,
  REMOVE_TODO_LIST_FAILURE,
  REMOVE_ALL_TODO_LIST_STARTED,
  REMOVE_ALL_TODO_LIST_SUCCESS,
  REMOVE_ALL_TODO_LIST_FAILURE, 
} from "../actiontype"

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


  export const postTodoListStarted = () => {
    return {
      type: POST_TODO_LIST_STARTED,
    }
  }
    // to post the list of users - success
    export const postTodoListSuccess = data => {
      return {
        type: POST_TODO_LIST_SUCCESS,
        payload: {
          postdata:data
        }
      }
    }
  export const postTodoListFailure = err => {
      return {
        type: POST_TODO_LIST_FAILURE,
        payload: {
          err
        }
      }
    }




    export const removeTodoListStarted = () => {
      return {
        type: REMOVE_TODO_LIST_STARTED,
      }
    }
      // to REMOVE the list of users - success
      export const removeTodoListSuccess = data => {
        return {
          type: REMOVE_TODO_LIST_SUCCESS,
          payload: {
            REMOVEdata:data
          }
        }
      }
    export const removeTodoListFailure = err => {
        return {
          type: REMOVE_TODO_LIST_FAILURE,
          payload: {
            err
          }
        }
      }



      
    export const removeAllTodoListStarted = () => {
      return {
        type: REMOVE_ALL_TODO_LIST_STARTED,
      }
    }
      // to REMOVE the list of users - success
      export const removeAllTodoListSuccess = data => {
        return {
          type: REMOVE_ALL_TODO_LIST_SUCCESS,
          payload: {
            REMOVEdata:data
          }
        }
      }
    export const removeAllTodoListFailure = err => {
        return {
          type: REMOVE_ALL_TODO_LIST_FAILURE,
          payload: {
            err
          }
        }
      }