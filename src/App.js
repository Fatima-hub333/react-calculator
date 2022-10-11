import React, { useState, useEffect, useRef } from "react";
import Result from "./component/Result";
import Button from "./component/Button";
import Bill from "./component/Bill";
import logo from "./images/logo.svg";

function App() {
  const [billError, setbillError] = useState(false);
  const [isbill, setIsBill] = useState(false);
  const [customError, setCustomError] = useState(false);
  const [billValue, setBillValue] = useState();
  const [tipAmount, setTipAmount] = useState(0);
  const [customValue, setCustomValue] = useState();
  const [totalBill, setTotalBill] = useState(0);

  //no of people
  const [people, setPeople] = useState();

  //error validations
  const [ispeople, setIsPeople] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const reset = () => {
    setbillError(false);
    setIsBill(false);
    setBillValue("");
    setTipAmount(0);
    setCustomValue(0);
    setTotalBill(0);
    setPeople("");
  };

  //check for changes in bill value and remow the error message
  useEffect(() => {
    if (billValue < 0 || billValue === "") {
      setIsBill(false);
    } else {
      setIsBill(true);
    }
  }, [billValue]);

  //inclugin people calculation
  useEffect(() => {
    if (billValue > 0 && tipAmount > 0) {
      let newTipAmount = tipAmount / people;
      let newTotalAmount = totalBill / people;
      setTipAmount(newTipAmount);
      setTotalBill(newTotalAmount);
      if (people === "" || people < 1) {
        setCustomValue(0);
        calculateTips(0);
      }
    }
  }, [customValue, people, billValue]);

  function calculateTips(percentages) {
    let BillValue = billValue;
    let percentage = percentages / 100;
    let totalValue =
      parseFloat(BillValue) + parseFloat(billValue) * parseFloat(percentage);
    setTipAmount(billValue * percentage);
    setTotalBill(totalValue);
  }

  //run if only the custom value changes
  useEffect(() => {
    if (billValue > 0 && customValue > 0) {
      calculateTips(customValue);
    }
  }, [customValue, people, billValue]);

  const getPercentage = (e) => {
    if (!billValue) {
      setbillError(true);
    } else {
      calculateTips(e.target.value);
    }
  };

  //useEffect on no of people
  useEffect(() => {
    if (people < 0 || people === "") {
      setIsPeople(false);
      setCustomError(false);
    } else {
      setIsPeople(true);
      setCustomError(true);
    }
  }, [customValue, people, billValue]);

  return (
    <div className="section">
      <div className="section-center">
        <div className="section-items">
          <div className="logo">
            <img src={logo} alt="SPLI ITER" />
          </div>
          <div className="form-container">
            <section className="form-inputs">
              <Bill
                billError={billError}
                setBillValue={setBillValue}
                isbill={isbill}
                billValue={billValue}
              />
              <Button
                customValue={customValue}
                setCustomValue={setCustomValue}
                getPercentage={getPercentage}
              />

              <div className="custom-value">
                <div className="info-container">
                  <label htmlFor="value">Number of people</label>
                  {!ispeople && (
                    <p className="error">
                      {people === ""
                        ? " value cannot be empty"
                        : "value cannot be less than zero"}
                    </p>
                  )}
                </div>
                <input
                  className={`${ispeople ? "input" : "input error"}`}
                  type="number"
                  id="value"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              </div>
            </section>

            <Result tipAmount={tipAmount} reset={reset} totalBill={totalBill} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
