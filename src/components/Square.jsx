import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import classes from "../styles/Square.module.css";
import Knight from "./Knight";

export default function Square(props) {
  //   const fill = props.black ? "black" : "white";
  let x = props.x;
  let y = props.y;
  let fill = (x + y) % 2 === 1 ? "black" : "white";
  let position = props.position;
  let updatePosition = props.updatePosition;
  let highlight = false;
  if (Math.abs(x - position[0]) == 2 && Math.abs(y - position[1]) == 1) {
    highlight = true;
  }
  if (Math.abs(x - position[0]) == 1 && Math.abs(y - position[1]) == 2) {
    highlight = true;
  }
  let isValid = function (x, y) {
    let canMove = false;
    let xdiff = position[0] - x;
    let ydiff = position[1] - y;
    if (Math.abs(xdiff) == 2 && Math.abs(ydiff) == 1) {
      canMove = true;
    }
    if (Math.abs(xdiff) == 1 && Math.abs(ydiff) == 2) {
      canMove = true;
    }
    if (canMove) {
      updatePosition([x, y]);
    }
  };
  let onDragOver = function (e) {
    e.preventDefault();
  };
  let onDrop = function (e) {
    e.preventDefault();
    if (highlight) {
      updatePosition([x, y]);
    }
  };
  return (
    <div
      style={{
        backgroundColor: highlight ? "#DCE64C" : fill,
        color: fill == "black" ? "white" : "black",
        width: "12.5%",
        height: "12.5%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",

        border: "1px solid black",
      }}
      onClick={() => isValid(x, y)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e)}
    >
      {x === position[0] && y === position[1] ? (
        <Knight />
      ) : (
        <div style={{ width: "100%", height: "100%" }}></div>
      )}
    </div>
  );
}
