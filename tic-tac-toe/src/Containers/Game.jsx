import Board from "../Components/Board";
import Score from "../Components/Score";
import { useState } from "react";
import calculateWinner from "../utils/helper";

const Game = () => {
  console.log("Game");
  const [board, setBoard] = useState(() => Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(() => true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    console.log("clicked");
    const tempBoard = [...board];
    if (winner || tempBoard[i]) return;
    tempBoard[i] = isXTurn ? "X" : "O";
    setBoard(tempBoard);
    setXTurn((prevXTurn) => !prevXTurn);
  };

  return (
    <>
      <Board squares={board} clicked={handleClick} />
      <Score
        winner={winner}
        isXTurn={isXTurn}
        setBoard={setBoard}
        setXTurn={setXTurn}
      />
    </>
  );
};

export default Game;
