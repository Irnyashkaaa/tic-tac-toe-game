import React, { useState } from "react";
// @ts-ignore
import { Square } from "./Square.tsx";

type propsType = {
    setStatus: (status: string) => void
    setWinner: (winner: string) => void
}

export const Board: React.FC<propsType> = (props) => {

    let [currentUser, setCurrentUser] = useState<'X' | 'O'>('X')

    let [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null])

    const [buttonDisable, setButtonDisable] = useState(false)

    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ];

    const winnerCounter = () => {
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setButtonDisable(true)
                return props.setWinner(`Winner is ${squares[a]}`)
            }
        }

        if (squares[0] && squares[2] && squares[3] && squares[4] && squares[5] && squares[5] && squares[6] && squares[7] && squares[8]) {
            setButtonDisable(true)
            return props.setWinner("Cat")
        }
    }


    let renderSquare = (i) => {
        return <Square setStatus={props.setStatus} value={i}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setSquare={setSquares}
            squares={squares}
            winnerCounter={winnerCounter}
            buttonDisable={buttonDisable} />
    }

    return (
        <div>
            <div className="status">{`Next player ${currentUser}`}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}
