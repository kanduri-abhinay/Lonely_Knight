import React, { Component } from "react";
import classes from "../styles/Knight.module.css";

function Knight() {
  return (
    <div className={classes.knight} draggable>
      &#x265E;
    </div>
  );
}
export default Knight;
