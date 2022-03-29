import React, {useContext, useEffect} from 'react'
import { AppContext } from "../WordleMain"

const Letter = ({letterPos, attemptVal}) => {
    const { board, correct, currAttempt,  setDisabledLtrs } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const cword = correct[letterPos] === letter;
    const almost  = !cword && letter !== "" && correct.includes(letter)
    const letterState = currAttempt.attempt > attemptVal && (cword ? "correct" : almost ? "almost" : "error" );

    useEffect(()=>{
      if(letter !== "" && !cword && !almost){
        // setDisabledLtrs([...disabledLtrs, letter])
        setDisabledLtrs((prev) => [...prev, letter])
      }
    }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
        {letter}
    </div>
  )
}

export default Letter