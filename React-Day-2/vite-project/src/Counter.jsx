import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mini-counter">
      <span className="mini-counter-value">{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default Counter;
