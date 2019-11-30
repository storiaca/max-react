import React from "react";

import "./Modal.css";

const modal = props => {
  const cssClasses = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];
  return (
    <div className="Modal">
      <h1>A Modal</h1>
      <button className={cssClasses.join(" ")} onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
