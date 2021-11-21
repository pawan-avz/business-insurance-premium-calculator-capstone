import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  box-sizing:border-box;
  width: 100%;
  heigth: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(14, 108, 185);
  

  .logo{
      padding: 15px 0;
      display: flex;
      flex-direction: column;
      a{
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
      }
      span{
        font-size: 14px;
        text-align: right;
        text-transform: lowercase;
        font-family:cursive;
        color: rgb(191, 226, 108);
      }
  }
  
`;

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
            <a href="#">Business Insurance</a>
            <span>Premium Calculator</span>
            </div>
            <Burger />   
        </Nav>
    )
}

export default Navbar