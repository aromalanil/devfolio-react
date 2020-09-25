import React from "react";
import ListInput from "./ListInput";
import ListItem from "./ListItem";
import ListPlaceholder from "./ListPlaceholder";

function DraggableList({ maxEntry, data, updateList, dataName }) {
  let dataLength = data.length;

  const removeItem = (key) => {
    const newList = data.filter((item) => item.key !== key);
    newList.forEach((item, index) => {
      item.position = index + 1;
    });

    updateList(newList);
  };

  // Generator functions
  const generateList = (data) =>
    data.map((listItem) => (
      <ListItem
        key={listItem.key}
        name={listItem.name}
        position={listItem.position}
        id={listItem.key}
        remove={removeItem}
      />
    ));

  const generatePlaceholder = (startIndex, length, dataName) => {
    let placeholders = [];
    let index = startIndex;
    for (let i = 0; i < length; i++) {
      placeholders.push(
        <ListPlaceholder key={index} index={index} name={dataName} />
      );
      index += 1;
    }
    return placeholders;
  };

  return (
    <div className="draggable-list">
      {generateList(data)}
      <ListInput position={dataLength + 1} name={dataName} />
      {generatePlaceholder(dataLength + 2, maxEntry - dataLength - 1, dataName)}
    </div>
  );
}

export default DraggableList;
