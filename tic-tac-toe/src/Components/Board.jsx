import Square from "./Square";

const Board = ({ squares, clicked }) => (
  <div className={"board"}>
    {squares.map((square, i) => {
      return <Square key={i} value={square} clicked={() => clicked(i)} />;
    })}
  </div>
);

export default Board;
