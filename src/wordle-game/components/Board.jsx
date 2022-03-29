import React from 'react'
import Letter from './Letter';
import { boardDefault } from '../Words';
const Board = () => {
   const arr = [];
   boardDefault.forEach((element, index) => {
    arr.push(index);
   });
   
    
  return (
    <div className='board'>
        { arr.map((rows, index) =>{
                return (
                    <div className="row" key={index}>
                        {
                            [0,1,2,3,4,5].map((inner, index2) =>{
                                return (
                                    <Letter key={index2} letterPos={inner} attemptVal={rows} />
                                )
                            })
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default Board