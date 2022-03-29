// here import all the reducers functions like updown as it needs single root.
import { changeTheNumber } from "./upDown";
import { toDoReducer } from "./toDoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber:changeTheNumber,
    toDoReducer:toDoReducer
})

export default rootReducer;