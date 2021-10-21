import React, { useState } from "react";
import "../css/nav.css";
import { NavLink } from "react-router-dom";
import userIcon from "../images/user.png";
const Nav = () => {
  const [userName, setUserName] = useState(
    JSON.stringify(localStorage.getItem("userName"))
  );

  const logout = () => {
    localStorage.removeItem("userName");
    setUserName("");
  };
  return (
    <>
      <div className="nav">
        <div className="logo">
          <NavLink to="/">Business Insurance</NavLink>
          <span>Premium Calculator</span>
        </div>

        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          {/* <NavLink to="/premium"><li>Premium</li></NavLink> */}

          {/* login and logout toggle */}
          {/* <NavLink to="/policies"><li>Policies</li></NavLink> */}
          {
            <NavLink to="/login">
              <li>Login</li>
            </NavLink>

            // :(
            //     <>
            //         <img src={userIcon} width="20" style={{borderRadius:"20px", marginRight:"5px"}}/>
            //         <NavLink onClick={logout} style={{color:"red"}} to="/login"><li>Logout</li></NavLink>
            //     </>
            // )
          }
          <NavLink to="/claim">
            <li>Claim</li>
          </NavLink>

          <NavLink
            style={{ backgroundColor: "crimson", padding: "10px" }}
            to="/quote/form1"
          >
            <li>Get a Quote</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Nav;
