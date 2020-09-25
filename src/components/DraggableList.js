import React from "react";
import ListInput from "./ListInput";
import ListItem from "./ListItem";
import ListPlaceholder from "./ListPlaceholder";

function DraggableList({ maxEntry, data, updateList, dataName }) {
  let dataLength = data.length;
  return (
    <div className="draggable-list">
      {generateList(data)}
      <ListInput position={dataLength + 1} name={dataName} />
      {generatePlaceholder(dataLength + 2, maxEntry - dataLength - 1, dataName)}
    </div>
  );
}

// Generator functions
const generateList = (data) =>
  data.map((listItem) => (
    <ListItem name={listItem.name} position={listItem.key} />
  ));

const generatePlaceholder = (startIndex, length, dataName) => {
  let placeholders = [];
  let index = startIndex;
  for (let i = 0; i < length; i++) {
    placeholders.push(<ListPlaceholder index={index} name={dataName} />);
    index += 1;
  }
  return placeholders;
};

export default DraggableList;
