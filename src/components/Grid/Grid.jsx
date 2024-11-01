import { useState } from "react";
import Card from "../card/Card";
import "./grid.css"


function isWinner(board, symbol) {

	// Check for Rows
	if (board[0] == board[1] && board[1] == board[2] && board[1] == symbol) { return symbol }
	if (board[3] == board[4] && board[4] == board[5] && board[5] == symbol) { return symbol }
	if (board[6] == board[7] && board[7] == board[8] && board[7] == symbol) { return symbol }


	// check for columns
	if (board[0] == board[3] && board[3] == board[6] && board[3] == symbol) { return symbol }
	if (board[1] == board[4] && board[4] == board[7] && board[4] == symbol) { return symbol }
	if (board[2] == board[5] && board[5] == board[8] && board[5] == symbol) { return symbol }

	// diagonal
	if (board[0] == board[4] && board[4] == board[8] && board[4] == symbol) { return symbol }
	if (board[2] == board[4] && board[4] == board[6] && board[4] == symbol) { return truesymbol }

	return "";
}

function Grid({ numberOfCards }) {

	const [turn, setTurn] = useState(true) // false -> X, True -> 0
	const [board, setBoard] = useState(Array(numberOfCards).fill(""))
	const [winner, setWinner] = useState(null);

	function play(index) {
		console.log("move played", index)
		if (turn == true) {
			board[index] = "O"
		} else {
			board[index] = "X"
		}
		const win = setWinner(isWinner(board, turn ? "O" : "X"))
		if (win) {
			setWinner(win)
		}
		setBoard([...board]);
		setTurn(!turn)
	}

	function reset(){
		setBoard(Array(numberOfCards).fill(""))
		setWinner(null)
		setTurn(true)
	}

	return (
		<>
			{winner && (
				<>
					<h1 className="turn-highlight">Winner is {winner}</h1>
					<button onClick={reset}>Reset Game!</button>
				</>
			)}
			<h1 className="turn-highlight">Current Turn: {(turn) ? 'O' : 'X'}</h1>
			<div className="grid">
				{board.map((value, idx) => { return <Card onPlay={play} key={idx} player={value} index={idx} /> })}
			</div>
		</>
	)
}

export default Grid