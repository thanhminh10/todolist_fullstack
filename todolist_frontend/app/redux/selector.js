
import { createSelector } from 'reselect'


export const todoListSelector =  (state) => state.todolist;
export const filterSelector = (state) => state.filter.searchtext;
export const filterSelector_status = (state) => state.filter.status;
export const sortSelector = (state) => state.filter.sortby;







const checkstatus = (filter_status,todo) => {
    // console.log(todo,filter_status);
    if(filter_status==="Completed"){
        // console.log("todo.completed",todo.completed);
        return todo.completed
    }
    else {
        // console.log("!todo.completed",!todo.completed);
        return !todo.completed;
    }
}




export const sortbyAdded = (todo) => {
    let currentValueNewIndex;
    let date1 ,date2;
    for (let i = 0; i < todo.length; i++) {
      
        currentValueNewIndex = i;

        
        for (let j = i + 1; j < todo.length; j++) {
            date1 =  new Date(todo[currentValueNewIndex].currentDay);
            date2 = new Date(todo[j].currentDay);
            if (
                date1 > date2
            ) {
                // console.log(date1 ,date2);
                currentValueNewIndex = j;
            }
        }

        if (i !== currentValueNewIndex) {
            let temp = todo[i];
            todo[i] = todo[currentValueNewIndex];
            todo[currentValueNewIndex] = temp;
        }
    }
    return todo;
}


export const sortbydeadline = (todo) => {
    let currentValueNewIndex;
    let date1 ,date2;
    for (let i = 0; i < todo.length; i++) {
      
        currentValueNewIndex = i;

        
        for (let j = i + 1; j < todo.length; j++) {
            date1 =  new Date(todo[currentValueNewIndex].deadline);
            date2 = new Date(todo[j].deadline);
            if (
                date1 > date2
            ) {
                // console.log(date1 ,date2);
                currentValueNewIndex = j;
            }
        }

        if (i !== currentValueNewIndex) {
            let temp = todo[i];
            todo[i] = todo[currentValueNewIndex];
            todo[currentValueNewIndex] = temp;
        }
    }
    return todo;
}









export const remainingSeach = createSelector(
    todoListSelector,
    filterSelector,
    filterSelector_status,
    sortSelector,
    (todoList, searchtext ,filter_status,sortSelector) =>  {
        if(sortSelector ==="Added date")
        {
            // console.log(todoList);
            return sortbyAdded(todoList.Todo.filter((todo)=>{
                if(filter_status==='All'){
                   
                    return todo.name.includes(searchtext)
                }
                else {
                    return todo.name.includes(searchtext) && checkstatus(filter_status,todo);
                }
            }))
        }
        else {
            return sortbydeadline(todoList.Todo.filter((todo)=>{
                if(filter_status==='All'){
                    return todo.name.includes(searchtext)
                }
                else {
                    return todo.name.includes(searchtext) && checkstatus(filter_status,todo);
                }
            }))
        }
    }
    )
    

