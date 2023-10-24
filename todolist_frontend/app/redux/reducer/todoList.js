
const initState = {
    Todo: [
        {
        id : 1 , 
        name:"Learn JavaScript" ,
        completed: true, 
        deadline:
            { string:'2023-10-15',  day:15 ,month:10,year:2023  },
        currentday:
            {string:'2023-09-10' ,day:10 ,month:9,year:2023} },],



    loading : false,

}







const todoListReducer = (state = initState, action) => {
    const todotmp = state;
    switch (action.type) {
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