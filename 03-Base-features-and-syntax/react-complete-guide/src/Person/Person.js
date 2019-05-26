import React from "react";

const Person = props => {
  return (
    <React.Fragment>
      <p onClick={props.clickChange}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </React.Fragment>
  );
};

export default Person;
