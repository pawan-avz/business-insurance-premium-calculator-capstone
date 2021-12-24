import React from 'react'
import "../../css/quotes.css";
import StepContext from "./step/StepContext";
function Left(props) {
    const step = React.useContext(StepContext);

    // const { changeBack, changeNext, steps } = step;
    const steps=props.step;
    
    return (
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
    )
}

export default Left
