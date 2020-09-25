import React from "react";

function ListInput({ position, name }) {
  return (
    <div className="list-input">
      {position} Add {name}
    </div>
  );
}

export default ListInput;
