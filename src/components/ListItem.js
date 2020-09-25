import React from "react";
import removeIcon from "../icons/remove.svg";

function ListItem({ position, name, remove, id }) {
  return (
    <div className="list-item">
      <div className="data">
        <p>
          {position}. {name}
        </p>
      </div>
      <button onClick={() => remove(id)} className="btn delete-btn">
        <img src={removeIcon} alt="Remove Icon" />
      </button>
    </div>
  );
}

export default ListItem;
