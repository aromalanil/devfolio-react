import React, { useState } from "react";
import removeIcon from "../icons/remove.svg";

function ListItem({
  index,
  name,
  remove,
  id,
  setDraggedItem,
  setDroppedItem,
  handleDrop,
}) {
  const [dragged, setDragged] = useState(false);
  const [draggedOver, setDraggedOver] = useState(false);

  const handleDragStart = (e) => {
    setDraggedItem({ key: id, index: index });
    setDragged(true);
  };

  const handleDragEnd = (e) => {
    handleDrop();
    setDragged(false);
  };

  const handleDragEnter = (e) => {
    setDroppedItem({ key: id, index: index });
  };

  return (
    <div
      className={`list-item ${dragged ? "dragged" : ""} ${
        draggedOver ? "dragged-over" : ""
      }`}
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragEnd={handleDragEnd}
      onDragLeave={() => setDraggedOver(false)}
      onDragOver={() => setDraggedOver(true)}>
      <div className="data">
        <p>
          {index + 1}. {name}
        </p>
      </div>
      <button onClick={() => remove(id)} className="btn delete-btn">
        <img src={removeIcon} alt="Remove Icon" />
      </button>
    </div>
  );
}

export default ListItem;
