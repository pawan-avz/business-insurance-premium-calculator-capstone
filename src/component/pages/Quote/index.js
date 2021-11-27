import React, { useEffect, useState } from "react";
import Form1 from "../Quote/quotes_component/Form1";
import Form2 from "../Quote/quotes_component/Form2";
import Form3 from "../Quote/quotes_component/Form3";
import YourBusiness from "./quotes_component/your_business";
import PropertiesDetails from './quotes_component/properties_details';
import Form4 from "../Quote/quotes_component/Form4";
import { Route } from "react-router";
import { NavLink, Switch } from "react-router-dom";
import "../../css/quotes.css";
import Form5 from "./quotes_component/Form5";
import Aboutyou from "./quotes_component/about_you"

const Quote = () => {
  const [state, setState] = useState([]);
  const [back, setBack] = useState(0);
  const [next, setNext] = useState(2);

  const changeNext = () => {
    setBack(back + 1);
    setNext(next + 1);
  };

  const changeBack = () => {
    setBack(back - 1);
    setNext(next - 1);
  };
  return (
    <>
      <div className="quotes_container">
        <div className="left_side">
          <div className="step_container">
            {[
              "Insurance type",
              "About you",
              "Your business",
              "Property details",
              "Premium",
              "Payment",
            ].map((data, index) => (
              <div
                key={index}
                className={next - 2 === index ? "step step-active " : "step "}
              >
                <div>
                  <div className="circle">
                    {next - 2 > index ? "✔︎" : ++index}
                  </div>
                </div>
                <div>
                  <div className="title">{data}</div>
                </div>
              </div>
            ))}
            {/* 4th step */}
            <div className={next - 2 === 6 ? "step step-active" : "step"}>
              <div>
                <div className="circle4">{next - 2 > 3 ? "✔︎" : 7}</div>
              </div>
              <div>
                <div className="title">Finish</div>
              </div>
            </div>
          </div>
          {/* 4th step end */}

          <div className="next_back">
            {back !== 0 && (
              <div className="back">
                <NavLink to={`/quote/form${back}`}>
                  <button onClick={changeBack}>Back</button>
                </NavLink>
              </div>
            )}
            {next !== 8 && (
              <div className="next">
                <NavLink to={`/quote/form${next}`}>
                  <button onClick={changeNext}>Continue</button>
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="right_side">
          <Switch>
            <Route exact path="/quote/form1">
              <Form1 changeNext={changeNext} />
            </Route>
            <Route exact path="/quote/form2">
           <Aboutyou/>
            </Route>
            <Route exact path="/quote/form3">
    
              <YourBusiness/>
            </Route>
            <Route exact path="/quote/form4">
             <PropertiesDetails/>
            </Route>
            <Route exact path="/quote/form5">
              <Form5 />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Quote;
