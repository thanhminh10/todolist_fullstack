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
  TOGGLE_TODO_LIST_STARTED,
  TOGGLE_TODO_LIST_SUCCESS,
  TOGGLE_TODO_LIST_FAILURE,
  UPDATE_LIST_STARTED,
  UPDATE_LIST_SUCCESS,
  UPDATE_LIST_FAILURE, 
} from "../actiontype"

/*-----------------------GET TODO----------------------- */


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

/*-----------------------ADD TODO----------------------- */


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


/*-----------------------REMOVE BY ID----------------------- */


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



/*-----------------------REMOVE ALL----------------------- */
      
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



/*-----------------------TOGGLE----------------------- */

      export const toggleTodoListStarted = () => {
        return {
          type: TOGGLE_TODO_LIST_STARTED,
        }
      }
        // to REMOVE the list of users - success
        export const toggleTodoListSuccess = data => {
          return {
            type: TOGGLE_TODO_LIST_SUCCESS,
            payload: {
              toggle_data:data
            }
          }
        }
      export const toggleTodoListFailure = err => {
          return {
            type: TOGGLE_TODO_LIST_FAILURE,
            payload: {
              err
            }
          }
        }
/*-----------------------TOGGLE----------------------- */

export const updateTodoListStarted = () => {
  return {
    type: UPDATE_LIST_STARTED,
  }
}
  // to REMOVE the list of users - success
  export const updateTodoListSuccess = data => {
    return {
      type: UPDATE_LIST_SUCCESS,
      payload: {
        update_data:data
      }
    }
  }
export const updateTodoListFailure = err => {
    return {
      type: UPDATE_LIST_FAILURE,
      payload: {
        err
      }
    }
  }