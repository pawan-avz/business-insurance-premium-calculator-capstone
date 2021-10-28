import React, { useState } from "react";

import { NavLink, useHistory } from "react-router-dom";
import {
  Container,
  Content,
  FormContainer,
  FormControl,
  Label,
  InputDiv,
  FormHeading,
  InlineDiv,
  ErrorMessage,
} from "../FormComponent";

export default function Index() {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",

    email: "",
    password1: "",
    password2: "",
    errors: {
      email: "",
      fname: "",
      lname: "",
      password: "",
    },
    fNameError: false,
    lNameError: false,
    emailError: false,
    passwordError: false,
    formError: false,
  });
  const validate = (name, value) => {
    

    switch (name) {
      case "firstName": 
        user.fNameError = !/^[a-zA-Z ]+$/.test(value);
        // user.errors.fname= user.fNameError===""?"required":"";
        user.errors.fname = user.fNameError
          ? "first name contains only alphabet"
          : "";
        break;
      case "lastName":
        user.lNameError = !/^[a-zA-Z ]+$/.test(value);
        user.errors.lname = user.lNameError
          ? "last name contains only alphabet"
          : "";
        break;
      case "email":
        user.emailError = !/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        user.errors.email = user.emailError ? "please write valid email" : "";
        break;
      case "password1":
        user.passwordError =
          !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
            value
          );
        user.errors.password = user.passwordError
          ? "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
          : "";
        break;
      case "mobile":
        user.mobileError = !/^[0-9]{10}$/.test(value);
        user.error.mobile = user.mobileError ? " is Invalid" : "";
        break;
    }
  };
const validateRequired=(user)=>{
    
}
  const handleChange = (key) => (event) => {
    setUser((oldData) => ({
      ...oldData,
      [key]: event.target.value,
    }));
    validate(key, event.target.value);
  };
  const handleForm = (event) => {
    event.preventDefault();
    validateRequired(user);

    // setLogged(true);
    // history.push('/user');
  };
  return (
    <Container>
      <Content>
        <FormHeading>Registration</FormHeading>

        <FormContainer>
          <form onSubmit={handleForm} method="POST">
            <FormControl>
              <Label for="fName">First name</Label>
              <InputDiv>
                <input
                  type="text"
                  placeholder="Enter first name"
                  onChange={handleChange("firstName")}
                  required
                />
                {user.fNameError ? (
                  <ErrorMessage>{user.errors.fname}</ErrorMessage>
                ) : null}
              </InputDiv>
            </FormControl>

            <FormControl>
              <Label for="lName">Last name</Label>
              <InputDiv>
                <input
                  type="text"
                  placeholder="Enter last name"
                  onChange={handleChange("lastName")}
                  required
                />
                {user.lNameError ? (
                  <ErrorMessage>{user.errors.lname}</ErrorMessage>
                ) : null}
              </InputDiv>
            </FormControl>

            <FormControl>
              <Label for="email">Email</Label>
              <InputDiv>
                <input
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange("email")}
            
                  required
                />
                {user.emailError ? (
                  <ErrorMessage>{user.errors.email}</ErrorMessage>
                ) : null}
              </InputDiv>
            </FormControl>

            <FormControl>
              <Label for="password">Password</Label>
              <InputDiv>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleChange("password1")}
                  required
             
                />
                {user.passwordError ? <ErrorMessage>{user.errors.password}</ErrorMessage> : null}
              </InputDiv>
            </FormControl>
            <InlineDiv>
              <Label for="gender">Gender</Label>
              <InlineDiv>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="Male"
                  required
                />
                <Label for="gender">Male</Label>
              </InlineDiv>
              <InlineDiv>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="Female"
                  required
                />
                <Label for="gender">Female</Label>
              </InlineDiv>
            </InlineDiv>

            <button className="btn" type="submit">
              Registration
            </button>

            <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
              <span class="registration">
                You have an account <NavLink to="/login">login</NavLink>
              </span>
            </div>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
}
