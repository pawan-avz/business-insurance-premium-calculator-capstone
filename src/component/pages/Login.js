import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    emailError: "",
    passwordError: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //validate function
  const validate = (e) => {
    const name = e.target.name;

    if (name === "email") {
      const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
      if (!regex.test(e.target.value)) {
        //alert("hello");
        setEmailError("Email is not valid");
      } else {
        setEmailError("");
      }
    }

    // password checking
    if (name === "password") {
      if (!/^\S*$/.test(e.target.value)) {
        setPasswordError("Password must not contain Whitespaces.");
      } else if (!/^(?=.*[A-Z]).*$/.test(e.target.value)) {
        setPasswordError(
          "Password must have at least one Uppercase Character."
        );
      } else if (!/^(?=.*[a-z]).*$/.test(e.target.value)) {
        setPasswordError(
          "Password must have at least one Lowercase Character."
        );
      } else if (!/^(?=.*[0-9]).*$/.test(e.target.value)) {
        setPasswordError("Password must contain at least one Digit.");
      } else if (
        !/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(
          e.target.value
        )
      ) {
        setPasswordError("Password must contain at least one Special Symbol.");
      } else if (!/^.{8,16}$/.test(e.target.value)) {
        setPasswordError("Password must be 08-16 Characters Long.");
      } else setPasswordError("");
    }
  };

  // handle function

  const handle = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  // function invoke when login button clicked

  const postLoginCredential = () => {
    // check for empty

    if (/^$/.test(state.email)) {
      setEmailError("Email field can't be empty");
    }
    if (/^$/.test(state.password)) {
      setPasswordError("Password field can't be empty");
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
          <button onClick={postLoginCredential}>Log in</button>
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
  /* <div class="container">
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {emailError ? <p style={{ color: "red" }}>{emailError}</p> : null}

            <label for="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {passwordError ? (
              <p style={{ color: "red" }}>{passwordError}</p>
            ) : null} */
}

{
  /* <label>
            <input type="checkbox" name="remember" /> Remember me
          </label> */
}
{
  /* </div> */
}
