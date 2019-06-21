import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";
const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    const timer = setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });
  //useEffect();
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.Red); // classes = ['red']
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join("  ")}>This is really working!</p>
      <button onClick={props.clicked} className={btnClass}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
