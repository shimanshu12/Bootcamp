import React, { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button className="ghost-btn" onClick={() => setShow(!show)}>
        {show ? "Hide text" : "Show text"}
      </button>
      {show && <p style={{ marginTop: "10px" }}>This text is visible.</p>}
    </div>
  );
};

export default ShowHide;
