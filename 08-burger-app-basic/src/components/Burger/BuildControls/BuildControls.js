import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
const controls = [
  { label: "Salad", types: "salad" },
  { label: "Bacom", types: "bacom" },
  { label: "Cheese", types: "cheese" },
  { label: "Meat", types: "meat" }
];
const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(ctrl => {
        return <BuildControl key={ctrl.label} label={ctrl.label} />;
      })}
    </div>
  );
};

export default buildControls;
