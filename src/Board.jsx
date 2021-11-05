import React, { useState } from 'react';
import { Square } from "./Square"
import './Board.css'

export default function Board() {
    const [boardState, setBoard] = useState([
        ['',''],
        ['',''],
    ]);
    const [count, setCount] = useState(0);

    const updateGame = (updatedBoard, updatedCount) => {
        setBoard(updatedBoard);
        setCount(updatedCount);
    };

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square symbol={boardState[i][j]} onClick={updateGame} boardState={boardState} x={i} y={j} count={count}/>))
        }
    }

    return (
        <div>
            <div id="count">Count: {count}</div>
            <div id="board">
                {boardComponent}
            </div>
        </div>
    )
}