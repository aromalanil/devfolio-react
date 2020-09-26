import React, { useState, useEffect, useRef } from "react";
import DraggableList from "./DraggableList";
import firebase from "../utils/firebase";

function SkillList() {
  const isFirstRun = useRef(true);
  const [skillList, setSkillList] = useState([ ]);

  useEffect(() => {
    const skillRef = firebase.database().ref("/");
    skillRef.on("value", (snapshot) => {
      isFirstRun.current = false;
      setSkillList(snapshot.val());
    });
  }, []);

  useEffect(() => {
    if (!isFirstRun.current) {
      firebase.database().ref("/").set(skillList);
    }
  }, [skillList]);

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
