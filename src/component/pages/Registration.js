import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Registration = () => {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fNameError, setfNameError] = useState("");
  const [lNameError, setlNameError] = useState("");
  const history = useHistory();

  //validate function
  const validate = () => {
    if (
      !email.includes("@") &&
      password.length < 6 &&
      fName.length === 0 &&
      lName.length === 0
    ) {
      setEmailError("Invalid Email Address");
      setPasswordError("Password should be more than 6 characters");
      setfNameError("First Name should not be Empty");
      setlNameError("Last Name should not be Empty");
    } else if (
      !email.includes("@") &&
      password.length < 6 &&
      lName.length === 0
    ) {
      setEmailError("Invalid Email Address");
      setPasswordError("Password should be more than 6 characters");
      setlNameError("Last Name should not be Empty");
    } else if (
      !email.includes("@") &&
      password.length < 6 &&
      fName.length === 0
    ) {
      setEmailError("Invalid Email Address");
      setPasswordError("Password should be more than 6 characters");
      setfNameError("First Name should not be Empty");
    } else if (!email.includes("@") && password.length < 6) {
      setEmailError("Invalid Email Address");
      setPasswordError("Password should be more than 6 characters");
    } else if (fName.length === 0) {
      setfNameError("First Name should not be Empty");
    } else if (lName.length === 0) {
      setlNameError("Last Name should not be Empty");
    } else if (!email.includes("@")) {
      setEmailError("Invalid Email Address");
    } else if (password.length < 6) {
      setPasswordError("Password should be more than 6 characters");
    } else {
      return true;
    }
  };

  //store user details in localStorage
  // localStorage.removeItem('userDetails')
  const store = () => {
    let data = JSON.parse(localStorage.getItem("userDetails")) || [];
    let obj = {
      firstName: fName,
      lastName: lName,
      email: email,
      password: password,
    };
    console.log(data);
    data.push(obj);
    localStorage.setItem("userDetails", JSON.stringify(data));
  };

  //submit function

  const submit = (e) => {
    e.preventDefault();
    setfNameError("");
    setlNameError("");
    setEmailError("");
    setPasswordError("");
    if (validate()) {
      alert("Registration successful");
      store();
      history.push("/login");
    }
  };

  return (
    <div className="register">
      <div class="main_container">
        <h2>Registration</h2>

        <form action="https://www.google.com/" method="POST">
          <div class="container">
            <label for="fName">
              <b>First Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="fName"
              onChange={(e) => setFirstName(e.target.value)}
              value={fName}
            />
            {fNameError ? <p style={{ color: "red" }}>{fNameError}</p> : null}

            <label for="lName">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lName"
              onChange={(e) => setLastName(e.target.value)}
              value={lName}
            />
            {lNameError ? <p style={{ color: "red" }}>{lNameError}</p> : null}

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

            <div className="gender">
              <label for="gender">
                <b>Gender</b>
              </label>
              <input type="radio" name="gender" value="Male" />
              <label for="html">Male</label>
              <input type="radio" name="gender" value="Female" />
              <label for="html">Female</label>
            </div>

            <button className="btn" type="submit" onClick={submit}>
              Registration
            </button>
          </div>

          <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
            <span class="registration">
              You have an account <NavLink to="/login">login</NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
