import { useRef } from "react";
import "./listStyle.css";

const List = ({ text, currentIndex, moveHandler }) => {
  const input = useRef();
  const upHandler = () => {
    moveHandler({ currentID: currentIndex, moveTo: currentIndex - 1 });
  };
  const downHandler = () => {
    moveHandler({ currentID: currentIndex, moveTo: currentIndex + 1 });
  };

  const moveToHandler = () => {
    let inputIndex = +input.current.value - 1;
    if (input.current.value !== "") {
      moveHandler({
        currentID: currentIndex,
        moveTo: inputIndex
      });
    }
    input.current.value = ""; // resetting back to blank input
  };

  return (
    <div className="input-container">
      <div className="input">{text}</div>
      <div>
        <button onClick={upHandler}>UP ⬆</button>
        <button onClick={downHandler}>DOWN ⬇</button>
        <input ref={input} type="number" min={1} max={5} placeholder="Index" />
        <button onClick={moveToHandler}>MOVE</button>
      </div>
    </div>
  );
};

export default List;
