import React, { useState } from "react";
import { NavLink, useHistory, Route } from "react-router-dom";
import LoginWithGoogle from "./Oauth2/LoginWithGoogle";
import Dashboard from "../../dashboard";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";

import { setLoggedIn,fetchUserSuccess } from "../../../../redux";
import {
  Container,
  InnerContainer,
  H2,
  LableAndInput,
  ButtonContainer,
  Button,
  LoginFooter,
  SocialLogin,
  SocialBtn,
  OrSeprator,
  OrText,
} from "./LoginStyle";
const SuccessMessage = styled.p`
  color: green;
  text-align: center;
`;

const Login = ({auth,setLogged,setUser}) => {
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

  const postFetch = async () => {
    await axios
      .post("http://localhost:8080/signing", state)
      .then((response) => {
        console.log(response);
        setLoginMessage("login in successfully, Loading....");
      
        setLogged();
        setUser(response.data)
        history.push("/dashboard")
      })
      .catch((errors) => {
        setLoginMessage("Invalid user name or password");
        setState({ email: "", password: "" });
        console.log(errors);
      });
  };

  // function invoke when login button clicked
  const postLoginCredential = () => {
    if (loginController && validateEmpty()) {
      postFetch();
    }
  };
  // form input type, name placeholders ...
  const formData = [
    {
      lable: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      value: state.email,
      errorMessage: emailError,
    },
    {   
      lable: "Password",
      name: "password",
      type: "password",
      placeholder: "password",
      value: state.password,
      errorMessage: passwordError,
    },
  ];

  return (
    <Container>
      <InnerContainer>
        <H2>Log in</H2>
        <LoginWithGoogle />

        <LableAndInput>
          <OrSeprator>
            <OrText>OR</OrText>
          </OrSeprator>
          {loginMessage !== "" && (
            <p
              style={{
                color: "#292929",
                marginTop: "25px",
                backgroundColor:
                  loginMessage !== "login in successfully, Loading...."
                    ? "rgba(256,200,200,1)"
                    : "rgba(200,256,200,1)",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              {loginMessage}
            </p>
          )}
        </LableAndInput>

        <SuccessMessage>{history.location.state}</SuccessMessage>

        <form method="POST">
          {formData.map((data, index) => (
            <LableAndInput>
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
            </LableAndInput>
          ))}
        </form>

        <ButtonContainer>
          <Button onClick={postLoginCredential}>Log in</Button>
        </ButtonContainer>

        <LoginFooter>
          {["registration", "forgot password?"].map((data, index) => (
            <div key={index}>
              {data === "registration" && <span>Need an account? </span>}
              <NavLink
                type={data.split(" ")[0]}
                to={"/" + data.split(" ").join("")}
              >
                {data}
              </NavLink>
            </div>
          ))}
        </LoginFooter>
      </InnerContainer>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps=dispatch=>{
	return{
		setLogged:()=>dispatch(setLoggedIn()),
    setUser:(users)=>dispatch(fetchUserSuccess(users))

	}
  }

export default connect(mapStateToProps,mapDispatchToProps)(Login);


