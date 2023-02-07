const HistoryItem = ({ title, data }) => {
  return (
    <div>
      <strong>{title}:</strong>
      {data}
    </div>
  );
};

export default HistoryItem;
