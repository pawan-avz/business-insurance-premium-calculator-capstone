import React from "react";
import { NavLink } from "react-router-dom";
import "../css/claim.css";
import claimImg from "../images/claim.jpg";

function Claim() {
  return (
    <>
      <div className="claims">
        <div className="left">
          <img src={claimImg} alt="claims" width="550" />
        </div>
        <div className="right">
          <div className="">
            <h1
              style={{
                textAlign: "center",
                padding: "10px",
                color: "grey",
                marginTop: "30px",
                //boxShadow: "1px 1px 1px #ccc",
                textTransform: "",
              }}
            >
              Enter Claim details
            </h1>
          </div>
          <div className="claim_form">
            <form>
              <label>Enter your policy number</label>
              <input type="text" />
              {/* <label>Date of birth</label>
              <input type="date" /> */}
              <NavLink to="/">
                <button>Continue ➡</button>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Claim;
