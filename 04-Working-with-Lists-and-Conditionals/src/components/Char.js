import React from "react";

const Char = props => {
  const { character, clicked } = props;
  const inStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  return (
    <div style={inStyle} onClick={clicked}>
      {character}
    </div>
  );
};

export default Char;
