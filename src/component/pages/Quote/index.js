import React, { useEffect, useState } from "react";
import Form1 from "../Quote/quotes_component/Form1";
import YourBusiness from "./quotes_component/your_business";
import PropertiesDetails from "./quotes_component/properties_details";
import { Route } from "react-router";
import { NavLink, Switch } from "react-router-dom";
import "../../css/quotes.css";
import Premium from "./quotes_component/premium/index";

import StepContext from "./step/StepContext";

const Quote = () => {
  const [state, setState] = useState([]);
  const step = React.useContext(StepContext);

  const { changeBack, changeNext, steps } = step;
  console.log(step);

  return (
    <>
      <div className="quotes_container">
        <div className="left_side">
          <div className="step_container">
            {[
              "Insurance type",
              "Your business",
              "Property details",
              "Premium",
            ].map((data, index) => (
              <div
                key={index}
                className={steps - 2 === index ? "step step-active " : "step "}
              >
                <div>
                  <div className="circle">
                    {steps - 2 > index ? "✔︎" : ++index}
                  </div>
                </div>
                <div>
                  <div className="title">{data}</div>
                </div>
              </div>
            ))}
            {/* 4th step */}
            <div className={steps - 2 === 4 ? "step step-active" : "step"}>
              <div>
                <div className="circle4">{steps - 2 > 3 ? "✔︎" : 5}</div>
              </div>
              <div>
                <div className="title">Finish</div>
              </div>
            </div>
          </div>
          {/* 4th step end */}
        </div>

        <div className="right_side">
          <Switch>
            <Route exact path="/quote/form1">
              <Form1 changeNext={changeNext} />
            </Route>

            <Route exact path="/quote/form2">
              <YourBusiness />
            </Route>
            <Route exact path="/quote/form3">
              <PropertiesDetails/>
            </Route>
            <Route exact path="/quote/form4">
              <Premium />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Quote;
