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
            console.log(action.payload);
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
        
           
        case 'todoList/addTodo':
            todotmp.Todo.push(action.payload);
            console.log(todotmp);
        return{
            ...todotmp
        } ;




        
       

    case 'todoList/remove_by_ID':

        todotmp.Todo.forEach((item,id) =>  {
            if(item.id == action.payload) {
                todotmp.Todo.splice(id, 1)
            }
        })
        return{...todotmp}
       
    case 'todoList/remove_All':    
        todotmp.Todo =  []
        return {
            ...todotmp
        }   
    case 'todoList/toggle_check_by_ID':  
     
        const {todo_id, completed} = action.payload;
        todotmp.Todo.forEach((item,id) =>  {
            if(item.id == todo_id) {
                todotmp.Todo[id].completed = completed;
            }
        })
       
        
        return {
            ...todotmp
        };
    case 'todoList/update_by_ID':  
        const {updateid, data} = action.payload;
        todotmp.Todo.forEach((item ,id) =>  {
            if(item.id == updateid) {
                todotmp.Todo[id].completed = data.completed;
                todotmp.Todo[id].name = data.name;
                todotmp.Todo[id].deadline = data.deadline;
            }
        })
        return{
            ...todotmp
        };
      default:
        return state;
    }
};
  
export default todoListReducer;