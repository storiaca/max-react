import React from "react";
import PropTypes from "prop-types";

const Validation = props => {
  const { textLength } = props;
  let validationMessage = "Text long enough";

  if (textLength <= 5) {
    validationMessage = "Text too short";
  }
  return (
    <div>
      <p>Length of text: {textLength}</p>
      <p>{validationMessage}</p>
    </div>
  );
};

Validation.propTypes = {
  textLength: PropTypes.number
};

export default Validation;
