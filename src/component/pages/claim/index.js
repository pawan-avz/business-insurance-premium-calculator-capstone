import React from "react";
import styled from "styled-components";
import claimImg from "../../images/claim.jpg";
import { NavLink } from "react-router-dom";
import useForm from "./useForm";
import {
  FormContainer,
  FormControl,
  Label,
  ErrorMessage,
  InputDiv,
} from "../form/FormComponent";
const Container = styled.div`
  display: flex;
  flex-direction: column;

`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media(max-width:700px){
    flex-direction:column-reverse;
  }
`;
const Column = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  @media(max-width:700px){
    width:100%;
  }
`;

const Button = styled.button`
  background-color: crimson;
  color: white;

  padding: 8px 30px;
  margin: 10px 0px 5px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
const InlineDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  padding: 14px;
  border-radius: 3px;
  border: 1px solid #ccc;
  // margin-bottom: 15px;
  // margin-top: 3px;
`;

export default function Index() {
  const { handleChange, handleSubmit, error, state } = useForm();
  return (
    <Container>
      <Row>
        <Column>
          <img src={claimImg} alt="claims" width="100%" />
        </Column>
        <Column>
          <div className="">
            <h1
              style={{
                textAlign: "center",
                padding: "10px",
                color: "grey",
                marginTop: "30px",
              }}
            >
              Enter Claim details
            </h1>
          </div>
          <FormContainer>
            <form>
              <FormControl>
                <Label for="claim">Enter your policy number *</Label>
                <InlineDiv>
                  <InputDiv>
                    <Input type="text" id="claim" onChange={handleChange} />
                  </InputDiv>

                  <NavLink to="/">
                    <Button onClick={handleSubmit}>Continue ➡</Button>
                  </NavLink>
                </InlineDiv>
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </FormControl>
            </form>
          </FormContainer>
        </Column>
      </Row>
    </Container>
  );
}
