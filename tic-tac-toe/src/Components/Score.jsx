const Score = ({ winner, isXTurn, setBoard, setXTurn }) => {
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  };
  return (
    <div className={"score"}>
      <h1>
        {winner
          ? winner === "withdraw"
            ? "Withdraw"
            : `Winner: ${winner}`
          : `Next turn: ${isXTurn ? "X" : "O"}`}
      </h1>
      {winner && (
        <button
          className={"btn"}
          onClick={() => {
            resetGame();
          }}
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default Score;
