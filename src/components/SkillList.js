import React, { useState } from "react";
import DraggableList from "./DraggableList";

function SkillList() {
  const [skillList, setSkillList] = useState([
    { key: 1, position: 1, name: "React" },
    { key: 2, position: 2, name: "Angular" },
    { key: 3, position: 3, name: "View" },
    { key: 4, position: 4, name: "Javascript" },
  ]);

  return (
    <div className="skill-list">
      <p className="description">Mention the areas you are proficient in.</p>
      <DraggableList
        maxEntry={14}
        data={skillList}
        updateList={setSkillList}
        dataName="Skill"
      />
    </div>
  );
}

export default SkillList;
