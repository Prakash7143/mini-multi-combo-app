import React, { useState }  from "react";
import './todo.css';
import { addTodo, removeTodo, deleteTodo } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

const Todo = () =>{
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const  list = useSelector((state) =>  state.toDoReducer.list);
    return(
        <>
          <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption> Add Your List Here </figcaption>
                    </figure>
                    <div className="addItems">
                        <input required className="input-fld" type="text" value={inputData} onChange={(e) =>{ setInputData(e.target.value)} } placeholder="Add Items ..." />
                        <i className="fa fa-plus add-btn" title="Please Write Something To Add List" onClick={() => dispatch(addTodo(inputData), setInputData('') ) } ></i>
                    </div>
                    <div className="showItems">
                        {
                            list.map((val, index)=>{
                                return(
                                    <div key={index} className="eachItem">
                                        <h3>{val.data}</h3>
                                        <div className="todo-btn">
                                            <i className="fa fa-trash add-btn" onClick={() => dispatch(deleteTodo(val.id) ) } ></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="showItems">
                        <button onClick={() => dispatch(removeTodo())} className="btn effect04" data-sm-link-text="remove All"><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;