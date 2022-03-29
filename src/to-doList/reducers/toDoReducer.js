
const initData = {
    list:[]
}
export const toDoReducer = (state = initData, action) =>{
    switch(action.type){
        case "ADDTODO": 
            const {id, data} = action.payload;
            if(data !== ''){ 
                return{
                    ...state,
                    list:[
                        ...state.list,
                        {
                            id:id,
                            data:data
                        }
                    ]
                }
            }

        case "DELETE_TODO": 
            const newList  = state.list.filter((vals) => vals.id !== action.id);
            return{
                ...state,
                list: newList
            }
        
        case "REMOVE_TODO":
            return{
                ...state,
                list:[]
            }

        default: return state;
    }
}