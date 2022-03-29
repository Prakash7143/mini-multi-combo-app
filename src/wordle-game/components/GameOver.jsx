import React, { useContext } from 'react'
import { AppContext } from "../WordleMain";

const GameOver = () => {
    const {gameOver, currAttempt, correct} = useContext(AppContext);
  return (
        <>
            <div className="gameOver">
                <h1>{gameOver.guessed ?  "You Guessed Correctly": "You Failed"}</h1>
                <h3>Correct Word was: {correct}</h3>
                {gameOver.guessed && (<h4>Attempts: {currAttempt.attempt}</h4>)}
            </div>
        </>
  )
}

export default GameOver