import React, { useCallback, useEffect, useContext } from 'react'
import Key from './Key';
import { AppContext } from "../WordleMain";

const Keyboard = () => {
    const { onEnter, onDelete, onSelector, disabledLtrs} = useContext(AppContext);

    const keys1 =  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 =  ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 =  ["Z", "X", "C", "V", "B", "N", "M"];

    const wholeKeyBod = (keys1.concat(keys2)).concat(keys3);

    const handleKeyboard = useCallback((event) =>{
        if(event.key === "Enter"){
            onEnter();
        }else if(event.key === "Backspace"){
            onDelete();
        }else{
            wholeKeyBod.forEach((key)=>{
                if(event.key.toLowerCase() === key.toLowerCase()){
                    onSelector(key)
                }
            })
        }
    });
    useEffect(() => {
      document.addEventListener("keydown", handleKeyboard);
    
    //   this is clean-up fn()
      return () => {
        document.removeEventListener("keydown", handleKeyboard);
      }
    }, [handleKeyboard]);
    

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
        <div className="line1">
            {
                keys1.map((key) =>{
                    return <Key keyVal={key} disabled={disabledLtrs.includes(key)}/>
                })
            }
        </div>
        <div className="line2">
            {
                keys2.map((key) =>{
                    return <Key keyVal={key} disabled={disabledLtrs.includes(key)}/>
                })
            }
        </div>
        <div className="line3">
            <Key keyVal={"ENTER"} bigKey />
            {
                keys3.map((key) =>{
                    return <Key keyVal={key} disabled={disabledLtrs.includes(key)}/>
                })
            }
            <Key keyVal={"DELETE"} bigKey/>
        </div>
    </div>
  )
}

export default Keyboard