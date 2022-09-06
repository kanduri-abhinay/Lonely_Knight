import React, { Component } from "react";
import classes from "../styles/Board.module.css";
import Knight from "./Knight";
import Square from "./Square";

function Board(props) {
  let board = [];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      board.push(
        <Square
          x={x}
          y={y}
          position={props.position}
          updatePosition={props.updatePosition}
        />
      );
    }
  }
  return <div className={classes.board}>{board}</div>;
}
export default Board;
