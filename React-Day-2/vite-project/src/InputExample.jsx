import React, { useState } from "react";

const InputExample = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type something"
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text ? `You typed: ${text}` : "Waiting for input..."}</p>
    </div>
  );
};

export default InputExample;
