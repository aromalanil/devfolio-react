import React from "react";
import ListInput from "./ListInput";
import ListItem from "./ListItem";
import ListPlaceholder from "./ListPlaceholder";

function DraggableList({ maxEntry, data, updateList, dataName }) {
  let dataLength = data.length;

  let draggedItem = null;
  let droppedItem = null;

  const setDraggedItem = (data) => {
    draggedItem = data;
  };
  const setDroppedItem = (data) => {
    droppedItem = data;
  };

  const removeItem = (key) => {
    const newList = data.filter((item) => item.key !== key);
    newList.forEach((item, index) => {
      item.position = index + 1;
    });

    updateList(newList);
  };

  const handleAddItem = (item) => {
    const newList = [...data];
    newList.push(item);
    updateList(newList);
  };

  const handleDrop = () => {
    console.log(droppedItem, draggedItem);
    if (droppedItem === null || draggedItem.index === droppedItem.index) {
      return;
    }
    const newList = [...data];
    const draggedItemData = newList.splice(draggedItem.index, 1)[0];

    for (let i = 0; i < newList.length; i++) {
      if (droppedItem.key === newList[i].key) {
        if (draggedItem.index < droppedItem.index) {
          newList.splice(i + 1, 0, draggedItemData);
        } else {
          newList.splice(i, 0, draggedItemData);
        }
        break;
      }
    }
    updateList(newList);
  };

  // Generator functions
  const generateList = (data) =>
    data.map((listItem, index) => (
      <ListItem
        key={listItem.key}
        name={listItem.name}
        setDraggedItem={setDraggedItem}
        setDroppedItem={setDroppedItem}
        handleDrop={handleDrop}
        index={index}
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
      <ListInput
        position={dataLength + 1}
        name={dataName}
        addItem={handleAddItem}
      />
      {generatePlaceholder(dataLength + 2, maxEntry - dataLength - 1, dataName)}
    </div>
  );
}

export default DraggableList;
