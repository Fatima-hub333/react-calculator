import React from "react";

function Result({ tipAmount, reset, totalBill }) {
  return (
    <div className="results">
      <div>
        <div className="tip-amount-container">
          <div className="tip-info">
            <h5>Tip Amount</h5>
            <p>/ person</p>
          </div>
          <div className="tip-amount">
            <h1>${tipAmount}</h1>
          </div>
        </div>
        <div className="tip-amount-container">
          <div className="tip-info">
            <h5>Total</h5>
            <p>/ person</p>
          </div>
          <div className="tip-amount">
            <h1>${totalBill}</h1>
          </div>
        </div>
      </div>
      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
}

export default Result;
