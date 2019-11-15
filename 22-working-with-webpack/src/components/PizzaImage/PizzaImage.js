import React from "react";

import classes from "./PizzaImage.module.css";
import PizzaImage from "../../assets/pizza.jpg";

const PizzaImage = props => {
  return (
    <div className={classes.PizzaImage}>
      <img src={PizzaImage} alt={PizzaImage} className={classes.PizzaImg} />
    </div>
  );
};

export default PizzaImage;
