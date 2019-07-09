import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
//import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";
const SideDrawer = props => {
  //...
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems>Burger Builder</NavigationItems>
      </nav>
    </div>
  );
};

export default SideDrawer;
