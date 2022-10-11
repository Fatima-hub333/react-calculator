import React from "react";

function Button({ getPercentage, customValue, setCustomValue }) {
  return (
    <div className="tip-selection">
      <label>Select Tip %</label>
      <div className="btn-container">
        <button onClick={getPercentage} value="5" className="btn-percent">
          5%
        </button>
        <button onClick={getPercentage} value="10" className="btn-percent">
          10%
        </button>
        <button onClick={getPercentage} value="15" className="btn-percent">
          15%
        </button>
        <button onClick={getPercentage} value="25" className="btn-percent">
          25%
        </button>
        <button onClick={getPercentage} value="50" className="btn-percent">
          50%
        </button>
        <div className="custom">
          <input
            placeholder="custom"
            className="input"
            type="number"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Button;
