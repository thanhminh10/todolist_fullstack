import {
    GET_TODO_LIST_STARTED,
GET_TODO_LIST_SUCCESS,
GET_TODO_LIST_FAILURE,
} from '../action/todoCallApi'


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
           
        case 'todoList/addTodo':
            todotmp.Todo.push(action.payload);

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