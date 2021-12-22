import React from "react";
import "./style.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Container=styled.div`
   display:flex;
   flex-direction:row;
   height:100vh;
`;
function Index() {
  return (
   <>
   <Container>
       <Sidebar/>
       <Main/>
   </Container>
   </>
  );
}

export default Index;
