import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height:fit-content;
  justify-content: center;
  align-items: center;
  

`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  border-radius: 5px;
//   background-color: rgb(241, 241, 241);
  border: 1px solid #f1f1f1;
  margin-top:5%;
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
  input {
    padding:10px 10px;
    width:70%;
    margin:15px 0px;
  }
  label{
    padding-right:20px;
    display: inline-block;
    width: 110px; 
    font-size:18px;
  }
  P{
      text-align:center;
      font-size:16px;
      margin:0;
      color:red;
  }
`;
const ContinueButton = styled.button`
  background-color: rgb(6, 115, 165);
  padding: 10px 20px;
  width:100px;
  color:white;
  border-radius:6px;
  border:none;
  margin:0 20px;
`;
const BackButton = styled.button`
  background-color: crimson;
  padding: 10px 30px;
  width:100px;
  color:white;
  border-radius:6px;
  margin:0 20px;
  border:none;
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

};