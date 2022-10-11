import React from "react";

function Bill({ setBillValue, isbill, billValue, billError = { billError } }) {
  return (
    <div className="bill-value">
      <div className="info-container">
        <label htmlFor="value">Bill</label>
        {billError && <p className="error">invalid input</p>}
      </div>
      <input
        autoComplete="off"
        className={`${isbill ? "input" : "input error"}`}
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
        type="number"
        id="name"
      />
    </div>
  );
}

export default Bill;
