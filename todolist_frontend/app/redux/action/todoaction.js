

export const addTodo =  (data)=>{
    return {
        type: 'todoList/addTodo',
        payload:data
    }
}


export const remove_by_ID =  (data)=>{
    return {
        type: 'todoList/remove_by_ID',
        payload:data
    }
}


export const remove_All =  ()=>{
    return {
        type: 'todoList/remove_All',
    }
}

export const toggle_check_by_ID =  (data)=>{
    return {
        type: 'todoList/toggle_check_by_ID',
        payload:data,
    }
}


export const update_by_ID =  (data)=>{
    return {
        type: 'todoList/update_by_ID',
        payload:data,
    }
}