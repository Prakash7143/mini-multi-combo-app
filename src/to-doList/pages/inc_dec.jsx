import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import {incNumber, decNumber} from "../actions/index";

const IncDec = ()=>{
    const myState = useSelector((state)=>{
        return(
          state.changeTheNumber
        )
      })
      const dispatch = useDispatch();
    return(
        <>
            <h3>Redux Incrment Decrement</h3>
            <button style={{width:"20px", height:"20px"}} onClick={() => dispatch(decNumber())} className="minus"><span>-</span></button>
            <input type="text" name="quantity" value={myState} />
            <button style={{width:"20px", height:"20px"}} onClick={() => dispatch(incNumber())} className="plus"><span>+</span></button>
        </>
    )
}

export default IncDec;