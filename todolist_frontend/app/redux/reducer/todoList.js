import {
    GET_TODO_LIST_STARTED,
GET_TODO_LIST_SUCCESS,
GET_TODO_LIST_FAILURE,
POST_TODO_LIST_STARTED,
POST_TODO_LIST_SUCCESS,
POST_TODO_LIST_FAILURE,
REMOVE_TODO_LIST_SUCCESS,
REMOVE_TODO_LIST_STARTED,
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
} from '../actiontype'


const initState = {
    Todo: [],
    loading : false,
    error: null,
    data:null
}



const todoListReducer = (state = initState, action) => {
    const todotmp = state;


    switch (action.type) {
        case GET_TODO_LIST_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_TODO_LIST_SUCCESS:
               
                return {
                  ...state,
                  Todo:[ ... action.payload.data],
                  loading: false
                }
        case GET_TODO_LIST_FAILURE:
                const { error } = action.payload;
                return {
                  ...state,
                  error
                }
           
        case POST_TODO_LIST_STARTED:
            
            return {
                ...state,
                loading: true
            }
        case POST_TODO_LIST_SUCCESS:
            const  { postdata } =  action.payload;
            console.log(postdata);
            todotmp.Todo.push(postdata);
            return {
                ...todotmp,
                loading: false
            }

        case POST_TODO_LIST_FAILURE:
              
                return {
                  
                }


        case REMOVE_TODO_LIST_STARTED:
            
                return {
                    ...state,
                    loading: true
                }
        case REMOVE_TODO_LIST_SUCCESS:
          
            todotmp.Todo.forEach((item,id) =>  {
                if(`${item.id}` == `${action.payload.REMOVEdata}`) {
                    
                    todotmp.Todo.splice(id, 1)
                }
            }) 
                return {
                    ...todotmp,
                    loading: false
        
                }
    
        case REMOVE_TODO_LIST_FAILURE:
                  
            return {
                      
        }
        


        case REMOVE_ALL_TODO_LIST_STARTED:
            
                    return {
                        ...state,
                        loading: true
                    }
        case REMOVE_ALL_TODO_LIST_SUCCESS:
              
                todotmp.Todo =  []
                    return {
                        ...todotmp,
                        loading: false
                }

        case REMOVE_ALL_TODO_LIST_FAILURE:
                  
            return {
                          
        }       
        
        case TOGGLE_TODO_LIST_STARTED:
                      
            return { ...state,
                loading: true}

        case TOGGLE_TODO_LIST_SUCCESS:
            const {toggle_data} =  action.payload;
            todotmp.Todo.forEach((element,id) => {
                
                if(`${element.id}` == `${toggle_data.id}`) {
                    todotmp.Todo[id].completed = toggle_data.completed;
                }
            });
            console.log(todotmp.Todo);
            return {
                    ...todotmp,
                    loading: false
            }
        case TOGGLE_TODO_LIST_FAILURE:
                  
           
                return {
                    ...todotmp,
                    loading: false
            }
            


        /*------------------------------*/
        case UPDATE_LIST_STARTED:
                      
            return { ...state,
                loading: true}

        case UPDATE_LIST_SUCCESS:
            const {update_data} =  action.payload;
            console.log(action.payload);
            todotmp.Todo.forEach((element,id) => {
                
                if(`${element.id}` == `${update_data.id}`) {
                    todotmp.Todo[id].name = update_data.name;
                    todotmp.Todo[id].completed = update_data.completed;
                    todotmp.Todo[id].currentday = update_data.currentday;
                    todotmp.Todo[id].deadline = update_data.deadline;
                }
            });
            return {
                    ...todotmp,
                    loading: false
            }
        case UPDATE_LIST_FAILURE:
                  
           
                return {
                    ...todotmp,
                    loading: false
            }
   



    // case 'todoList/toggle_check_by_ID':  
     
      
       
        
    //     return {
    //         ...todotmp
    //     };
      default:
        return state;
    }
};
  
export default todoListReducer;