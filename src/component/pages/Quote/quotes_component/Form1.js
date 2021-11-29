import React from "react";
import { NavLink } from "react-router-dom";
import "../../../css/form1.css";
import StepContext from "../step/StepContext";
const Form1 = (props) => {
  const step=React.useContext(StepContext);
  const {steps,changeBack,changeNext,resetStep}=step;  
  
  const typeOfInsurance = [
    "Select type of insurance",
    "Auto insurance",
    "Health insurance",
    "General insurance",
    "Business insurance",
  ];

  const typeOfBusinessInsurance = [
    "Select type of Business insurance",
    "Commercial property insurance",
    "General liability insurance",
    "Commercial auto liability",
    "Worker's compensation",
  ];

  return (
    <>
      <div className="info_form1">
        <h1
          style={{
            textAlign: "center",
            padding: "10px",
            color: "grey",
            marginTop: "10px",
            boxShadow: "1px 1px 1px #ccc",
            textTransform: "uppercase",
          }}
        >
          Check prices and get coverage today
        </h1>
        <p>
          This website offers General Liability, Professional Liability, and
          Business Owners Policies online.
        </p>
      </div>

      <form>
        <div className="form1">
          <label>Select Business type</label>
          <div className="profession">
            <select>
              {typeOfBusinessInsurance.map((data) => (
                <option>{data}</option>
              ))}
            </select>
          </div>
          <div className="get_quote">
            <NavLink to="/quote/form2">
              <button onClick={changeNext}>Get a Quote</button>
            </NavLink>
          </div>
        </div> 

        <p className="customer_call">
          Speak with a licensed insurance agent: +91 9999999988 Monday – Friday,
          7am – 10pm ET
        </p>
      </form>
    </>
  );
};

export default Form1;



