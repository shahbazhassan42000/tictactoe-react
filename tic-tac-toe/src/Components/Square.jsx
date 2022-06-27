const Square = ({ value, clicked }) => (
  <button className={"square"} onClick={clicked}>
    {value}
  </button>
);

export default Square;
