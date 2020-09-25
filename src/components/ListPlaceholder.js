import React from "react";

function ListPlaceholder({ index, name }) {
  return (
    <div className="list-placeholder">
      <p>
        {index} Add {name}
      </p>
    </div>
  );
}

export default ListPlaceholder;
