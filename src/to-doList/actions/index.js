export const incNumber = () =>{
    return{
        type:"INCREMENT"
    }
}

export const decNumber = () =>{
    return{
        type:"DECREMENT"
    }
}

export const addTodo = (data) =>{
    return{
        type:"ADDTODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data,
        }
    }
}

export const deleteTodo = (id) =>{
    return{
        type:"DELETE_TODO",
        id:id
    }
}

export const removeTodo = () =>{
    return{
        type:"REMOVE_TODO"
    }
}