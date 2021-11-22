// import React, { useState } from "react";
// import "../css/nav.css";
// import { NavLink } from "react-router-dom";
// import userIcon from "../images/user.png";
// const Nav = () => {
//   const [userName, setUserName] = useState(
//     JSON.stringify(localStorage.getItem("userName"))
//   );

//   const logout = () => {
//     localStorage.removeItem("userName");
//     setUserName("");
//   };
//   return (
//     <>
//       <div className="nav">
//         <div className="logo">
//           <NavLink to="/">Business Insurance</NavLink>
//           <span>Premium Calculator</span>
//         </div>

//         <ul>
//           <NavLink to="/">
//             <li>Home</li>
//           </NavLink>
//           {/* <NavLink to="/premium"><li>Premium</li></NavLink> */}

//           {/* login and logout toggle */}
//           {/* <NavLink to="/policies"><li>Policies</li></NavLink> */}
//           {
//             <NavLink to="/login">
//               <li>Login</li>
//             </NavLink>

//             // :(
//             //     <>
//             //         <img src={userIcon} width="20" style={{borderRadius:"20px", marginRight:"5px"}}/>
//             //         <NavLink onClick={logout} style={{color:"red"}} to="/login"><li>Logout</li></NavLink>
//             //     </>
//             // )
//           }
//           <NavLink to="/claim">
//             <li>Claim</li>
//           </NavLink>

//           <NavLink
//             style={{ backgroundColor: "crimson", padding: "10px" }}
//             to="/quote/form1"
//           >
//             <li>Get a Quote</li>
//           </NavLink>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Nav;





import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row nowrap;
    a{
      text-decoration: none
    }


    li{
        margin: 10px;
        color:white;
    }

    @media (max-width: 768px) {
        margin:0;
        display: flex;
        justify-content: flex-start;
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        a{
          text-decoration: none
        }

        li{
            color : #f1f1f1;
            margin-top: 50px;
            
        }
    }

`;

const Nav = ({ open }) => {
    return(
      <Ul open={open}>
        <NavLink to="/"><li>Home</li> </NavLink>
        <NavLink to="/login"><li>Login</li></NavLink>
        <NavLink to="/claim"><li>Claim</li></NavLink>
        <NavLink to="/quote/form1"><li style={{ backgroundColor: "crimson", padding: "10px" }}>Get a Quote</li></NavLink>
      </Ul>
    )
}

export default Nav
