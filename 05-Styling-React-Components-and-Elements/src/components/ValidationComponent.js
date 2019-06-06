import React from "react";
import PropTypes from "prop-types";

const ValidationComponent = props => {
  const { textLength } = props;
  return (
    <div>
      <p>Length of text: {textLength}</p>
      {textLength < 5 ? "Text too short" : "Text long enough"}
    </div>
  );
};

ValidationComponent.propTypes = {
  textLength: PropTypes.number
};

export default ValidationComponent;
