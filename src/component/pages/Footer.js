import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../css/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        copyrights &copy; 2021 business insurance premium calculator
      </div>

      <div className="second_footer">
        <ul>
          <NavLink to="">
            <li>about</li>
          </NavLink>
          <NavLink to="">
            <li>term & condition</li>
          </NavLink>
          <NavLink to="">
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
