

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




export const GetUsers = () => {
    console.log("GetUsers");

    return dispatch => {
        console.log("GetUsers dispatch");

        axios.get(process.env.NEXT_PUBLIC_TODOAPI)
        .then(res => {
            const persons = res.data;

            dispatch({
                type: 'Todolist/get',
                users: response
            });
        })
    };
};

export const AddUser = (params) => {
    console.log("AddUser");

    return dispatch => {
        console.log("Add User dispatch");

        axios.post(`https://reqres.in/api/users`, {params})
        .then(response => {
            console.log(response);

            axios.get(`https://reqres.in/api/users`)
            .then(res => {
                console.log(res);

                dispatch({
                    type: GET_USERS,
                    users: response
                });
            })
        })
    };
};