import React, { useEffect, useState } from "react";
import Form1 from "../Quote/quotes_component/Form1";
import YourBusiness from "./quotes_component/your_business";
import PropertiesDetails from "./quotes_component/properties_details";
import { Route } from "react-router";
import { NavLink, Switch, Redirect } from "react-router-dom";
import StepContext from "./step/StepContext";
import Premium from "./quotes_component/premium/index";


const Quote = () => {
  const [state, setState] = useState([]);
  const step = React.useContext(StepContext);

  const { changeBack, changeNext, steps } = step;

  return (
    <>
      <div className="quotes_container">
        

        <div className="right_side">
          
        </div>
      </div>
    </>
  );
};

export default Quote;
{/* <Switch>
            
          
          </Switch> */}