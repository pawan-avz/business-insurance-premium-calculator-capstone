import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../../../redux";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row nowrap;
  z-index: 19;
  a {
    text-decoration: none;
  }

  li {
    margin: 10px;
    color: white;
  }

  @media (max-width: 768px) {
    margin: 0;
    display: flex;
    justify-content: flex-start;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      text-decoration: none;
    }

    li {
      color: #f1f1f1;
      margin-top: 50px;
    }
  }
`;

const Nav = ({ open, auth, logout, user }) => {
  let isLoggedIn = auth.isLogged;

  return (
    <Ul open={open}>
      {isLoggedIn ? (
        <>
          <NavLink to="/dashboard">
            <li>
              {user.firstName} {user.lastName}
            </li>
          </NavLink>
          <NavLink to="/quote/form1">
            <li
              style={{
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "5px",
                padding: "8px",
              }}
            >
              Get a Quote
            </li>
          </NavLink>
          <NavLink to="/profile">
            <li>profile</li>
          </NavLink>
          <NavLink to="/reset_password">
            <li>Update Password</li>
          </NavLink>
          <NavLink to="/">
            <li
              onClick={logout}
              style={{
                backgroundColor: "#2e151b",
                border: "1px solid white",
                borderRadius: "5px",
                padding: "8px",
              }}
            >
              logout
            </li>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/">
            <li>Home</li>{" "}
          </NavLink>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
        </>
      )}
    </Ul>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
