import { useState } from 'react';
import './game.css';
import zero from '../assets/zero.png'
import cross from '../assets/cross.png'


let moves = ["", "", "", "", "", "", "", "", ""];

export default function Game() {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let [result, setResult] = useState("");
    
    let toggle = (e, idx) => {
        if (lock === false && moves[idx] === "") {  
            if (count % 2 === 0) {
                e.target.innerHTML = `<img src='${zero}'>`;
                setCount(++count);
                moves[idx] = '0';
                checkWon();
            } else {
                e.target.innerHTML = `<img src='${cross}'>`;
                setCount(++count);
                moves[idx] = 'X';
                checkWon();
            }
            console.log(moves);
        }
    }

    let won = (v) => {
        setResult(`${v} won 🎊🎊🎊`);
        setLock(true); 
    }   

    let checkWon = () => {
        if (moves[0] !== "" && moves[0] === moves[1] && moves[1] === moves[2]) {
            won(moves[0]);
        } else if (moves[3] !== "" && moves[3] === moves[4] && moves[4] === moves[5]) {
            won(moves[3]);
        } else if (moves[6] !== "" && moves[6] === moves[7] && moves[7] === moves[8]) {
            won(moves[6]);
        } else if (moves[0] !== "" && moves[0] === moves[3] && moves[3] === moves[6]) {
            won(moves[0]);
        } else if (moves[1] !== "" && moves[1] === moves[4] && moves[4] === moves[7]) {
            won(moves[1]);
        } else if (moves[2] !== "" && moves[2] === moves[5] && moves[5] === moves[8]) {
            won(moves[2]);
        } else if (moves[0] !== "" && moves[0] === moves[4] && moves[4] === moves[8]) {
            won(moves[0]);
        } else if (moves[2] !== "" && moves[2] === moves[4] && moves[4] === moves[6]) {
            won(moves[2]);
        } else if (count === 9) { 
            setResult("It's a draw!");
            setLock(true);
        }
    }

    let resetGame = () => {
        window.location.reload()
    }

    return (
        <>
            <div className="container">
                <h1>Tic-Tac-Toe</h1>
                <div className="result">
                    {result}
                </div>

                <div className="board">
                    <div className="row1">
                        <div className="box" onClick={(e) => toggle(e, 0)}></div>
                        <div className="box" onClick={(e) => toggle(e, 1)}></div>
                        <div className="box" onClick={(e) => toggle(e, 2)}></div>
                    </div>

                    <div className="row2">
                        <div className="box" onClick={(e) => toggle(e, 3)}></div>
                        <div className="box" onClick={(e) => toggle(e, 4)}></div>
                        <div className="box" onClick={(e) => toggle(e, 5)}></div>
                    </div>

                    <div className="row3">
                        <div className="box" onClick={(e) => toggle(e, 6)}></div>
                        <div className="box" onClick={(e) => toggle(e, 7)}></div>
                        <div className="box" onClick={(e) => toggle(e, 8)}></div>
                    </div>
                </div>

                 <button className='reset' onClick={resetGame}>Reset</button>   
            </div>
        </>
    );
}
