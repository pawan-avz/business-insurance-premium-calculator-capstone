import React from "react";
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
  let arr = JSON.parse(localStorage.getItem("selected_business"));
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
              {arr.map((property, index) => (
                <>
                  {/* computer details */}
                  {arr && arr.find((data) => data === property) && (
                    <h2
                      style={{
                        textAlign: "center",
                        padding: "10px",
                        fontSize: "20px",
                        color: "#ccc",
                        marginTop: "10px",

                        textTransform: "uppercase",
                      }}
                    >
                      {property} Details
                    </h2>
                  )}

                  {arr &&
                    arr.find((data) => data === property) &&
                    inputData.map((data, index) => (
                      <FormControl>
                        <Label for={data.id}>{data.label}</Label>
                        <InputDiv>
                          <Input
                            required
                            type={data.type}
                            placeholder={data.label}
                            onChange={handleChange(property)(data.id)}
                          />
                          {errors[property][data.id] && (
                            <ErrorMessage>
                              {errors[property][data.id]}
                            </ErrorMessage>
                          )}
                        </InputDiv>
                      </FormControl>
                    ))}
                </>
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
