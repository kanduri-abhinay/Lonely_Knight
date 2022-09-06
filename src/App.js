import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [position, updatePosition] = useState([0, 1]);
  return <Board position={position} updatePosition={updatePosition} />;
}

export default App;
