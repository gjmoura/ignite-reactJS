import { render } from "react-dom";
import { useState } from 'react';

export function Counter() {
  let [counter ,setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
    </div>
  );
}