import React from "react";
import removeIcon from "../icons/remove.svg";

function ListItem({ position, name }) {
  return (
    <div className="list-item">
      <div className="data">
        <p>
          {position}. {name}
        </p>
      </div>
      <button className="btn delete-btn">
        <img src={removeIcon} alt="Remove Icon"/>
      </button>
    </div>
  );
}

export default ListItem;
