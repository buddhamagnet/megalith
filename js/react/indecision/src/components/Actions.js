import React from "react";

const Action = ({ option, handlePick, hasOptions }) => (
  <div>
    {option && <p>{option}</p>}
    <button className="big-button" onClick={handlePick} disabled={!hasOptions}>
      What should I do?
    </button>
  </div>
);

export default Action;
