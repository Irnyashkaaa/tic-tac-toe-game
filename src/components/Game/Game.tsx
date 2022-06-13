import React, { useState } from "react";
// @ts-ignore
import { Board } from "./Board/Board.tsx";

export const Game = () => {

    const [status, setStatus] = useState<string>('Start game')
    const [winner, setWinner] = useState<'X' | 'O' | null>(null)

    return (
        <div className="game">
            <div className="game-board">
                <Board setStatus={setStatus} setWinner={setWinner}/>
            </div>
            <div className="game-info">
                <div>game status: {status}</div>
                <b>winner: {winner}</b>
            </div>
        </div>
    );
}

