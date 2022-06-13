import React, { useState } from "react";

type propsType = {
    value: number
    setCurrentUser: (user: 'X' | 'O') => void
    currentUser: 'X' | 'O'
    setSquare: () => void
    squares: []
    winnerCounter: () => void
    setStatus: (newStatus: string) => void
    buttonDisable: boolean
}


export const Square: React.FC<propsType> = (props) => {
    let squareNumber = Number(props.value)

    let [value, setValue] = useState<string | null>(null)

    let changeValue = () => {
        if (!value) {
            let newSquareValue = props.currentUser === 'X' ? 'X' : 'O'
            setValue(newSquareValue)
            props.setCurrentUser(props.currentUser === 'X' ? 'O' : 'X')
            // @ts-ignore
            props.squares.splice(squareNumber, 1, newSquareValue)
            props.winnerCounter()
            props.setStatus('game')
        }
    }

    return (
        <button disabled={props.buttonDisable} className="square" onClick={changeValue}>
            {value}
        </button>
    );

}

