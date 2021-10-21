import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/form1.css";
const Form2 = () => {
  const details = [
    {
      type: "text",
      name: "name",
      placeholder: "Full Name*",
      value: "",
    },
    {
      type: "number",
      name: "mobileno",
      placeholder: "Mobile No.*",
      value: "",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email address*",
      value: "",
    },
    {
      type: "date",
      name: "dob",
      placeholder: "Date of birth",
      value: "",
    },

    {
      type: "text",
      name: "personal_add",
      placeholder: "Personal address*",
      value: "",
    },
    {
      type: "text",
      name: "city",
      placeholder: "City*",
      value: "",
    },
    {
      type: "text",
      name: "state",
      placeholder: "State*",
      value: "",
    },
    {
      type: "number",
      name: "pin_code",
      placeholder: "Pin code*",
      value: "",
    },
  ];
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
        About you
      </h2>

      <div className="form2">
        <form>
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
                  value={data.value}
                />
              </div>
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default Form2;
