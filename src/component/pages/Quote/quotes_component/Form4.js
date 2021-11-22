import React from "react";
import { NavLink } from "react-router-dom";
import "../../../css/form1.css";
const Form4 = () => {
  let arr = JSON.parse(localStorage.getItem("selected_assets"));
  console.log(arr);
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          padding: "10px",
          fontSize: "30px",
          color: "grey",
          marginTop: "10px",
          boxShadow: "1px 1px 1px #ccc",
          borderRadius: "10px",
          textTransform: "uppercase",
        }}
      >
        Property details
      </h2>
      <div className="form2">
        <form>
          {["Computer", "Laptop", "Mobile"].map((property, index) => (
            <>
              {/* computer details */}
              {arr && arr.find((data) => data === property) && (
                <h2
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    fontSize: "20px",
                    color: "#ccc",
                    marginTop: "10px",
                    boxShadow: "1px 1px 1px #ccc",
                    textTransform: "uppercase",
                  }}
                >
                  {property} Details
                </h2>
              )}

              {arr &&
                arr.find((data) => data === property) &&
                [
                  "Brand name*",
                  "Model*",
                  "Purchase rate*",
                  "Purchase date*",
                ].map((data, index) => (
                  <div className="input_label">
                    <div className="label">
                      <label for={data}>{data}</label>
                    </div>
                    <div className="input">
                      <input
                        type="text"
                        name={data}
                        placeholder={data}
                        size="100"
                      />
                    </div>
                  </div>
                ))}
            </>
          ))}
        </form>
      </div>
    </>
  );
};

export default Form4;
