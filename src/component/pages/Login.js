import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/login.css";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [loginController, setLoginController] = useState(true);
  // handle function set data into state
  const handle = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  //validate function
  const validate = (e) => {
    const name = e.target.name;
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (name === "email") {
      if (!regex.test(e.target.value)) {
        setEmailError("Email is not valid");
        setLoginController(false);
      } else {
        setEmailError("");
        setLoginController(true);
      }
    }
    // if password field not empty then remove error message
    if (name === "password") {
      if (/^$/.test(state.password)) {
        setPasswordError("");
      }
    }
  };

  //empty filed validation onclick checking
  const validateEmpty = () => {
    let status = true;
    if (/^$/.test(state.email)) {
      setEmailError("Email field can't be empty");
      status = false;
    }
    if (/^$/.test(state.password)) {
      setPasswordError("Password field can't be empty");
      status = false;
    }
    return status;
  };
  //post fetch function
  const postFetch = async () => {
    try {
      const request = await axios.post("/login", {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: { state }, //post login creadential
      });
      if (request.status === 200) {
        setLoginMessage("Loged in successfully");
        history.push("/dashboard"); //redirect to dashboard
      } else {
        setLoginMessage("Login failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // function invoke when login button clicked
  const postLoginCredential = () => {
    if (loginController && validateEmpty()) {
      postFetch();
      history.push("/"); //for test
    }
  };

  // form input type, name placeholders ...
  const formData = [
    {
      lable: "Email",
      name: "email",
      type: "email",
      placeholder: "test@gmail.com",
      value: state.email,
      errorMessage: emailError,
    },
    {
      lable: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter password",
      value: state.password,
      errorMessage: passwordError,
    },
  ];

  return (
    <div className="login_container">
      <div class="inner_container">
        <h2 className="h2">Log in</h2>
        <form method="POST">
          <div>
            {formData.map((data, index) => (
              <div className="label_and_input">
                <label>{data.lable}</label>
                <input
                  type={data.type}
                  name={data.name}
                  placeholder={data.placeholder}
                  value={data.value}
                  autocomplete="off"
                  onChange={(e) => [handle(e), validate(e)]}
                />
                {data.errorMessage ? (
                  <span style={{ color: "crimson" }}>{data.errorMessage}</span>
                ) : null}
              </div>
            ))}
          </div>
        </form>

        <div className="login_btn">
          <button type="submit" onClick={postLoginCredential}>Log in</button>
        </div>
        <div class="login_footer">
          <div>
            Need an account? <NavLink to="/registration">sign up</NavLink>
          </div>
          <div className="forgot">
            <NavLink to="/forgot">forgot password?</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
}
