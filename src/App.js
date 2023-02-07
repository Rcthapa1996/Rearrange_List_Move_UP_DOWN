import "./styles.css";
import List from "./List";
import History from "./History";
import useMoveHandler from "./useMoveHandler";

export default function App() {
  const { data, moveHandler, operation } = useMoveHandler([
    "One",
    "Two",
    "Three",
    "Four",
    "Five"
  ]);

  return (
    <div className="App">
      {data.map((d, index) => (
        <List
          key={index}
          text={d}
          currentIndex={index}
          moveHandler={moveHandler}
        />
      ))}
      <History operation={operation} />
    </div>
  );
}
