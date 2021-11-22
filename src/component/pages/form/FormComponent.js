import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 800px;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  border-radius: 5px;

  border: 1px solid #f1f1f1;
`;

const Input = styled.input`

  padding: 14px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  margin-top:3px;
 
`;

const FormContainer = styled.div`
  margin: 30px;
`;
const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  // align-items:center;
`;
const Label = styled.label`
  width: auto;
  font-size: 14px;
  font-weight: 500;
  margin-left:5px;
  
 
`;
const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top:5px;
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
const Formfooter = styled.p`
  background-color: rgb(241, 241, 241);
  text-align:center;
  margin: 20px 0;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 5px;
`;
const SubmitButton = styled.button`
  background-color: rgb(14, 108, 185);
  color: white;
  padding: 15px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 50px;
  margin:5px auto;

    &:hover{
      background-color: #38af83 !important;
    }
`;
const InlineDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
`;
const Select = styled.select`
  width: 100%;
  height: 46px;
  background: white;
  color: gray;
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom:5px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 0px 1px;
    
  }
`;
const CheckboxDiv=styled.div`
   display:flex;
   flex-direction:row;
   margin-top:5px;
   margin-left:25px;
  //  justify-content:center;
   align-item:center;
`;
const Checkbox =(props)=>{
    return(
      <CheckboxDiv>
      <input type="checkbox" id={props.id} value={props.label} onChange={props.change("property")}/>
      <Label for={props.id}>{props.label}</Label>
  
      </CheckboxDiv>
    
    )
}
export {
  Container,
  Content,
  FormContainer,
  FormControl,
  Label,
  Input,
  InputDiv,
  FormHeading,
  InlineDiv,
  ErrorMessage,
  Formfooter,
  SubmitButton,
  Select,
  Checkbox
};
