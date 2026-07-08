import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="toggle-block">
      <button
        className={`switch ${isOn ? "switch-on" : ""}`}
        onClick={() => setIsOn(!isOn)}
        aria-pressed={isOn}
        aria-label="Toggle switch"
      >
        <span className="switch-thumb" />
      </button>
      <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
    </div>
  );
};

export default Toggle;
