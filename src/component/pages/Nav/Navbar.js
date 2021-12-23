import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  box-sizing:border-box;
  width: 100%;
  heigth: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  margin:0;
  overflow:hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#376e6f;
  

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
        // font-family:cursive;
      }
      span{
        font-size: 17px;
        text-align: right;
        text-transform: lowercase;
        font-family:cursive;
        color: #fff;
        font-weight:bold;
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