import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [credential, setCredential] = useState("");
  const history = useHistory();

  //validate function
  const validate = () => {
    if (!email.includes("@") && password.length < 5) {
      setEmailError("Invalid Email Address");
      setPasswordError("Invalid Password");
    } else if (!email.includes("@")) {
      setEmailError("Invalid Email Address");
    } else if (password.length < 6) {
      setPasswordError("Invalid Password");
    } else {
      return true;
    }
  };

  //get user details in localStorage
  // localStorage.removeItem('userDetails')
  const getUser = () => {
    let user;
    let data = JSON.parse(localStorage.getItem("userDetails")) || [];
    // console.log(data)
    // alert(Array.isArray(data))
    if (data.length !== 0) {
      user = data.find((email) => {
        return email === email;
      });
      //alert(Array.isArray(result))
      // console.log(user.password)
      //user = Object.keys(result).map((key) => [Number(key), result[key]]);
      //localStorage.setItem('userName', user.firstName+" "+user.lastName)
      //alert(result.length)
    } else {
      return false;
    }
    if (
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password.toLowerCase() === password.toLowerCase()
    ) {
      return true;
    }
  };

  //submit function

  const submit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    if (validate() && getUser()) {
      alert("you are loged in");
      getUser();
      history.push("/");
    } else if (!getUser()) {
      alert("User not Found");
    } else {
      alert("Invalid Credential");
    }
  };

  // console.log(localStorage.getItem('userDetails'))

  return (
    <div className="login">
      <div class="main_container">
        <h2 className="h2">Login</h2>

        <form className=".form" action="/" method="POST">
          <div class="container">
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
            ) : null}
            <button className="btn" type="submit" onClick={submit}>
              Login
            </button>
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
          </div>

          <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
            <span class="registration">
              You don't have an account{" "}
              <NavLink to="/registration">click here</NavLink>
            </span>
            <span class="forgot">
              Forgot <NavLink to="#">password?</NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
