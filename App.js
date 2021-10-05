import React, { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(0);
  const AddCount = () => {
    console.log("click");
    setCounter(counter + 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <div className="count">{counter}</div>
      <div>
        <button className="btn green" onClick={() => AddCount()}>
          +
        </button>
        <button className="btn yellow" onClick={() => resetCounter()}>
          Reset
        </button>
        <button className="btn red" onClick={() => decrementCounter()}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
