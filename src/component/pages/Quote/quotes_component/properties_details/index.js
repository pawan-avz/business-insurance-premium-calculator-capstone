import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Switch } from "react-router-dom";
import StepContext from "../../step/StepContext";
import {
  Container,
  Content,
  FormHeading,
  FormContainer,
  FormControl,
  InlineDiv,
  Input,
  InputDiv,
  Checkbox,
  Label,
  Select,
  ContinueButton,
  BackButton,
  ButtonDiv,
  ErrorMessage,
} from "../../../form/FormComponent";
import useForm from "./useForm";
const Scroll = styled.div`
  overflow-y: scroll;
  height: 500px;
`;

export default function Index() {
  const { handleChange, properties, handleSubmit, errors } = useForm();
  let field;
  const step = React.useContext(StepContext);
  const { changeBack, changeNext, steps } = step;

  const inputData = [
    {
      label: "Brand name*",
      id: "brandName",
      type: "text",
    },
    {
      label: "Model*",
      id: "model",
      type: "text",
    },
    {
      label: "Purchase rate*",
      id: "rate",
      type: "number",
    },
    {
      label: "Purchase date*",
      id: "date",
      type: "date",
    },
  ];

  return (
    <Container>
      <Content>
        <FormHeading>Properties details</FormHeading>
        <Scroll>
          <FormContainer>
            <form>
              {inputData && inputData.map(data => (
                <FormControl>
                  <Label for={data.id}>{data.label}</Label>
                  <InputDiv>
                    <Input
                      required
                      type={data.type}
                      placeholder={data.label}
                      onChange={handleChange(data.id)}
                    />
                    {errors && (
                      <ErrorMessage>{errors}</ErrorMessage>
                    )}
                  </InputDiv>
                </FormControl>
              ))}
            </form>
          </FormContainer>
        </Scroll>
      </Content>
      <ButtonDiv>
        <NavLink to={`/quote/form3`}>
          <BackButton onClick={changeBack}> back</BackButton>
        </NavLink>

        <ContinueButton onClick={handleSubmit}>continue </ContinueButton>
      </ButtonDiv>
    </Container>
  );
}
