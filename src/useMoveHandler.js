import { useState, useCallback } from "react";

const useMoveHandler = (initialVal) => {
  const [data, setData] = useState(initialVal);
  const [operation, setOperation] = useState([]);

  const moveHandler = useCallback(
    ({ currentID, moveTo }) => {
      if (moveTo === currentID || moveTo < 0 || moveTo >= data.length) {
        return; // checking if moveTo location is invalid
      }

      let currentData = data[currentID]; // taking currentId data
      const newData = [...data]; // copy of data because we cannot mutate state data directly it will create issue
      newData.splice(currentID, 1); // deleting currentId from newData
      newData.splice(moveTo, 0, currentData); // inserting currentData in moveTo location

      const operationCopy = [...operation];
      operationCopy.unshift({
        before: data.join(","),
        operation: Number(currentID + 1) + "->" + Number(moveTo + 1),
        now: newData.join(",")
      });
      setOperation(operationCopy);
      setData(newData);
    },
    [data, operation]
  );

  return { data, moveHandler, operation };
};

export default useMoveHandler;

/// Previous Code

// console.log(currentID, moveTo);
// // let newData = [...data]; // Reason for sprading is to copy data, otherwise it get stop
// // let currentData = data[currentID];
// let movedPosition = currentID + moveTo;

// if (movedPosition < 0 || movedPosition >= data.length) {
//   return; // if index is outof bound
// }

// if (currentID < movedPosition) {
//   while (currentID < movedPosition) {
//     console.log(newData);
//     newData[currentID] = newData[currentID + 1];
//     currentID++;
//   }
// } else {
//   while (currentID > movedPosition) {
//     console.log(newData);
//     newData[currentID] = newData[currentID - 1];
//     currentID--;
//   }
// }
// newData[currentID] = currentData;
// setData(newData);

// Next Approach

// if (currentID < moveTo) {
//   let currentData = data[currentID]; // taking currentId data
//   const newData = [...data]; // copy of data because we cannot mutate state data directly it will create issue
//   newData.splice(currentID, 1); // deleting currentId from newData
//   console.log("bef:", currentID, moveTo, newData);
//   newData.splice(currentID + 1, 0, currentData);
//   console.log("aft:", currentID, moveTo, newData);
//   setData(newData);
//   setTimeout(() => {
//     moveHandler({ currentID: currentID + 1, moveTo: moveTo });
//   }, 3000);
// } else {
//   let currentData = data[currentID]; // taking currentId data
//   const newData = [...data]; // copy of data because we cannot mutate state data directly it will create issue
//   newData.splice(currentID, 1); // deleting currentId from newData
//   newData.splice(currentID - 1, 0, currentData);
//   setData(newData);
//   setTimeout(() => {
//     moveHandler({ currentID: currentID - 1, moveTo: moveTo });
//   }, 3000);
// }
// return;
