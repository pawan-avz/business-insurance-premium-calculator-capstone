import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height:fit-content;
  justify-content: center;
  align-items: center;
  

`;
const Scroll = styled.div`
  overflow-y: scroll;
  height: 500px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  border-radius: 5px;
//   background-color: rgb(241, 241, 241);
  border: 1px solid #f1f1f1;
  margin-top:5%;
  @media(maxwidth:700px){
      width:-webkit-fill-available;
  }
  
`;
const FormHeading = styled.p`
  // background-color: rgb(241, 241, 241);
  // text-align: center;
  margin: 10px 30px;
  // padding: 10px;
  font-size: 20px;
  font-weight: 800;
  border-radius: 5px;
`;
const FormContainer = styled.div`
  margin: 30px;

  
  P{
      text-align:center;
      font-size:16px;
      margin:0;
      color:red;
  }
  
`;
const ContinueButton = styled.button`
  background-color:white;
  border: 1px solid rgb(6, 115, 165);
  padding: 10px 20px;
  width:100px;
  color: rgb(6, 115, 165);
  border-radius:6px;
  cursor:pointer;
  margin:0 20px;
  &:hover{
    background-color:rgb(6, 115, 165);
    color:white;

  }
`;
const BackButton = styled.button`
  background-color:white;
  border:1px solid crimson;
  padding: 10px 30px;
  width:100px;
  color:crimson;
  border-radius:6px;
  margin:0 20px;
  cursor:pointer;
  &:hover{
    color:white;
    background-color:crimson;
  }

`;
const ButtonDiv=styled.div`
  display: flex;
  flex-direction: row;
  // width:200px;
  margin: 20px 10px;

`;

export {
    Container,
    Content,
    FormHeading,
    FormContainer,
    ContinueButton,
    BackButton,
    ButtonDiv
   ,Scroll
};