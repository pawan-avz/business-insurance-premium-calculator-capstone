import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height:85vh;
  justify-content: center;
  align-items:center;

`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 738px;
  border-radius:5px;
  

  border: 1px solid #f1f1f1;

`;
const FormContainer = styled.div`
  margin:20px;
`;
const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  // align-items:center;
`;
const Label=styled.label`
width:20%;
font-size:15px;
`;
const InputDiv=styled.div`
width:100%;
display: flex;
  flex-direction: column;

`;
const FormHeading=styled.p`
background-color: rgb(241, 241, 241);
   text-align:center;
   margin:10px 20px;
   padding:10px;
   font-size:20px;
   font-weight:800;
   border-radius:5px;
`;
const InlineDiv=styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  margin:0 10px;

`;

const ErrorMessage=styled.p`
   color:red;
   font-size:12px;
   text-align:center;
`;
export { Container, Content, FormContainer, FormControl,Label ,InputDiv,FormHeading,InlineDiv,ErrorMessage};
