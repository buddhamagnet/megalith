import React, { useState, useEffect } from "react";

export const Counter = ({ startCount, startMessage }) => {
  // Destructure state and function to set state from useState (passing in initial state).
  const [counter, setCounter] = useState(startCount);
  const [message, setMessage] = useState(startMessage);

  // Do work in useEffect to run when state changes. Pass in an array of state values
  // as the second argument to control what state changes cause useEffect to run.
  useEffect(() => {
    document.title = counter;
  }, [counter]);

  useEffect(() => console.log("useEffect fired on mount only"), []);

  return (
    <div>
      <div>
        The current count is {counter}.
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(startCount)}>RESET</button>
      </div>
      <div>
        The message is {message}.
        <button onClick={() => setMessage(message.toUpperCase())}>upper</button>
        <button onClick={() => setMessage(message.toLowerCase())}>lower</button>
        <button onClick={() => setMessage(startMessage)}>reset</button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
};

Counter.defaultProps = {
  startCount: 0,
  startMessage: "decimate",
};
