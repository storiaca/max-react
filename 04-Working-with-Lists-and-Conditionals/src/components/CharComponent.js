import React from "react";
import PropTypes from "prop-types";

const CharComponent = props => {
  const { letters, onClick } = props;
  const inStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  const letter = letters.split(" ");
  console.log(letter);

  return (
    <div>
      {letter.map((item, i) => (
        <div style={inStyle} key={i} onClick={onClick}>
          {item}
        </div>
      ))}
    </div>
  );
};

CharComponent.propTypes = {
  letters: PropTypes.string
};

export default CharComponent;
