import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/form1.css";
const Form3 = () => {
  const [insuranceType, setInsuranceType] = useState("");
  const [coverageDate, setCoverageDate] = useState("");
  // const typeOfInsurance = [
  //   "Select type of insurance",
  //   "Auto insurance",
  //   "Health insurance",
  //   "General insurance",
  //   "Business insurance",
  // ];

  // const typeOfBusinessInsurance = [
  //   "Select type of Business insurance",
  //   "Commercial property insurance",
  //   "General liability insurance",
  //   "Commercial auto liability",
  //   "Worker's compensation",
  // ];

  const registred = ["Association", "Corporation", "Indivisual", "Partnership"];

  const details = [
    {
      type: "date",
      name: "start_date",
      placeholder: "What date would you like coverage to start?*",
    },
    // {
    //   type: "text",
    //   name: "comany_name",
    //   placeholder: "Company name*",
    //   value: "",
    // },

    // {
    //   type: "date",
    //   name: "start_date_of_company",
    //   placeholder:
    //     "What date did your business begin under current ownership?*",
    //   value: "",
    // },
    // {
    //   type: "text",
    //   name: "years_of_experience",
    //   placeholder: "Years of experience in the industry*",
    //   value: "",
    // },
    // {
    //   type: "number",
    //   name: "number_of_owner",
    //   placeholder: "Number of owners*",
    //   value: "",
    // },
  ];

  const handle = (e) => {
    let arr = JSON.parse(localStorage.getItem("selected_assets")) || [];
    arr.push(e.target.value);
    localStorage.setItem("selected_assets", JSON.stringify(arr));
  };
  localStorage.removeItem("selected_assets"); //delete local storage
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
        Your business
      </h2>
      <div className="form2">
        <form>
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
            Your Protection Options
          </h2>
          {/* select type of insurance and type of business insurance */}
          {/* <div className="input_label">
            <div className="label">
              <label>Type of Insurance</label>
            </div>

            <div className="input">
              <select onChange={(e) => setInsuranceType(e.target.value)}>
                {typeOfInsurance.map((data) => (
                  <option value={data}>{data}</option>
                ))}
              </select>
            </div>
          </div> */}

          {/* </div> */}
          {/* <div className="input_label">
            <div className="label">
              <label>Type of Business Insurance</label>
            </div>
            <div className="input">
              <select>
                {insuranceType === "Business insurance" ? (
                  typeOfBusinessInsurance.map((data) => <option>{data}</option>)
                ) : (
                  <option>Sorry no data available</option>
                )}
              </select>
            </div>
          </div> */}

          {/* How is your business registered? */}
          <div className="input_label">
            {/* <div className="state"> */}
            <div className="label">
              <label>How is your business registered?</label>
            </div>

            <div className="input">
              <select onChange={(e) => setInsuranceType(e.target.value)}>
                {registred.map((data) => (
                  <option value={data}>{data}</option>
                ))}
              </select>
            </div>
          </div>

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
            Your Business Details
          </h2>
          {/* take details from user according the business type insurance */}
          {details.map((data, index) => (
            <div className="input_label">
              <div className="label">
                <label for={data.placeholder}>{data.placeholder}</label>
              </div>
              <div className="input">
                <input
                  type={data.type}
                  name={data.name}
                  placeholder={data.placeholder}
                  size="100"
                  disabled={data.disabled}
                  value={coverageDate}
                  onChange={(e) => setCoverageDate(e.target.value)}
                />
              </div>
            </div>
          ))}
          {/* select asset */}
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
            Select your property
          </h2>
          <div className="select_asset">
            {["Computer", "Laptop", "Mobile"].map((data, index) => (
              <>
                <div className="input">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value={data}
                    onChange={handle}
                    required
                  />
                </div>
                <div className="label">
                  <label for="vehicle1"> {data}</label>
                </div>
              </>
            ))}
          </div>
        </form>
      </div>
    </>
  );
};

export default Form3;
