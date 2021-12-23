import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../css/footer.css";
const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#1C3334"}}>
      <div className="copyright">
       
      </div>

      <div className="second_footer">
        <ul>
         
          <NavLink to="">
            <li>  copy  &copy;  2021  all rights   reserverd </li>
          </NavLink>
          <NavLink to="/about">
            <li>about</li>
          </NavLink>
          <NavLink to="/contact">
            <li>contact us</li>
          </NavLink>
        </ul>
      </div>

      <div className="first_footer">
        <ul>
          <NavLink to="">
            <li>
              <FaFacebook />
            </li>
          </NavLink>
          <NavLink to="">
            <li>
              <FaInstagram />
            </li>
          </NavLink>
          <NavLink to="">
            <li>
              <FaLinkedin />
            </li>
          </NavLink>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
