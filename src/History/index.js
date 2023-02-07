import HistoryItem from "./HistoryItem";
import "./historyStyle.css";

const History = ({ operation }) => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {operation.map((oper, index) => (
        <li key={index}>
          <div className="history-wrapper">
            <HistoryItem title={"Before:"} data={oper.before} />
            <HistoryItem title={"Operation:"} data={oper.operation} />
            <HistoryItem title={"Now:"} data={oper.now} />
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default History;
