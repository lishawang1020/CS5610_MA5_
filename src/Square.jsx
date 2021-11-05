import React, { useState } from 'react';
import './Square.css';

export function Square(props) {
    const [color, setColor] = useState('white');
    const symbol = props.symbol;
    
    return (<div onClick={() => {
        const x = props.x;
        const y = props.y;
        const boardState = props.boardState;
        let count = props.count;
        if (symbol === '') {
            boardState[x][y] = 'X';
            count = count + 1;
            setColor('black');
        } else {
            boardState[x][y] = '';
            count = count - 1;
            setColor('white');
        }
        props.onClick([...boardState], count);
        }
    } id="square" style={{backgroundColor: color}}>
    </div>);
}