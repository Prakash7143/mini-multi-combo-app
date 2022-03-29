import { useState, createContext, useEffect } from "react";
import "./WordleMain.css";
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWords } from "./Words";
import "../pages/home/home.css"
import { Sidebar, Navbar } from "../components"

export const AppContext = createContext();

function WordleMain() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLtrs, setDisabledLtrs] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver:false, guessed:false });
  const [correct, setCorrect] = useState('');

  useEffect(() => {
    generateWords().then((wrds) => {
      // console.log(wrds.wordSet)
      setWordSet(wrds.wordSet);
      setCorrect(wrds.todaysWord);
    })
  }, []);
  // const correct = "RIGHTS";
  const len = boardDefault[0].length;

  
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };
  const onSelector = (keyVal) => {
    if (currAttempt.letterPos > len - 1) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };
  const onEnter = () => {
    if (currAttempt.letterPos !== len) return;
    let currWord = '';
    for(let i=0; i<len; i++){
      currWord += board[currAttempt.attempt][i];
    }
    if(wordSet.has(currWord.toUpperCase())){
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    }else{
      alert("Word not found");
    }

    if(correct === currWord){
      setGameOver({gameOver:true, guessed: true});
      return;
    }
    if(currAttempt.attempt === len-1){
      setGameOver({gameOver:true, guessed: false});
    }
    
  };

  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <div className="App">
                <nav>
                    <h1>Wordle Game</h1>
                    <p><b>Hint Pattern:</b> {wordSet}</p>
                </nav>
                <AppContext.Provider
                    value={{
                    board,
                    setBoard,
                    currAttempt,
                    setCurrAttempt,
                    onDelete,
                    onEnter,
                    onSelector,
                    correct,
                    disabledLtrs, 
                    setDisabledLtrs, 
                    gameOver, setGameOver
                    }}
                >
                    <div className="game">
                    <Board />
                    { gameOver.gameOver ? <GameOver/>  :<Keyboard /> }
                    
                    </div>

                </AppContext.Provider>
                </div>
            </div>
        </div>
    </div>
    // 
  );
}

export default WordleMain;
