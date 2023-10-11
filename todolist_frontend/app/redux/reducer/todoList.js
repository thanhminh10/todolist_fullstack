
const initState = [
    {
        id : 1 , 
        name:"Learn JavaScript" ,
        completed: true, 
        deadline:
            { string:'2023-10-15',  day:15 ,month:10,year:2023  },
        currentday:
            {string:'2023-09-10' ,day:10 ,month:9,year:2023} },
    {
        id : 2 , 
        name:"Learn Redux" ,
        completed: false, 
        deadline:
            { string:'2023-10-20',  day:20 ,month:10,year:2023  },
        currentday:
            {string:'2023-10-06' ,day:6 ,month:10,year:2023} },

    {
        id : 3 , 
        name:"Learn .Net" ,
        completed: false, 
        deadline:
            { string:'2023-10-09',  day:9 ,month:10,year:2023  },
        currentday:
            {string:'2023-10-05' ,day:5 ,month:10,year:2023} },
            
]






const todoListReducer = (state = initState, action) => {
    const todotmp = state;
    switch (action.type) {
        case 'todoList/addTodo':
        return [...state, action.payload]

    case 'todoList/remove_by_ID':

        todotmp.forEach((item,id) =>  {
            if(item.id == action.payload) {
                todotmp.splice(id, 1)
            }
        })
        return[...todotmp]
       
    case 'todoList/remove_All':    
        return {
            ...state ,
            todoList:[],
        }   
    case 'todoList/toggle_check_by_ID':  
     
        const {todo_id, completed} = action.payload;
        todotmp.forEach((item,id) =>  {
            if(item.id == todo_id) {
                todotmp[id].completed = completed;
            }
        })
       
        
        return [...todotmp];
    case 'todoList/update_by_ID':  
        const {updateid, data} = action.payload;
        todotmp.forEach((item ,id) =>  {
            if(item.id == updateid) {
                todotmp[id].completed = data.completed;
                todotmp[id].name = data.name;
                todotmp[id].deadline = data.deadline;
            }
        })
        return[...todotmp];
      default:
        return state;
    }
};
  
  export default todoListReducer;