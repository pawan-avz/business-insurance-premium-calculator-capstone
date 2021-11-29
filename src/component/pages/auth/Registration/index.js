
import React from "react";
import validateInfo from "./validateInfo";
import useForm from "./useForm";
import styled from "styled-components"
import { NavLink, useHistory } from "react-router-dom";
import {
  Container,
  Content,
  FormContainer,
  FormControl,
  Label,
  InputDiv,
  FormHeading,
  InlineDiv,SubmitButton,
  ErrorMessage,Formfooter,Input
} from "../../form/FormComponent";
const Scroll = styled.div`
  overflow-y: scroll;
  height: 550px;
`;
const Div=styled.div`
  height:90vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

export default function Index() {
  const { handleChange, user, errors, handleSubmit } = useForm(validateInfo);

  return (
    <Div>
    <Container>
      <Content>
        <Scroll>
        <FormHeading>Registration</FormHeading>

        <FormContainer>
          <form method="POST" onSubmit={handleSubmit}>
            <FormControl>
              <Label for="fName">First name</Label>
              <InputDiv>
                <Input
                id="fName"
                  type="text"
                  placeholder="Enter first name"
                  onChange={handleChange("firstName")}
                />
                {errors.firstName && (
                  <ErrorMessage>{errors.firstName}</ErrorMessage>
                )}
              </InputDiv>
            </FormControl>

            <FormControl>
              <Label for="lName">Last name</Label>
              <InputDiv>
                <Input
                  type="text"
                  id="lName"
          
                  placeholder="Enter last name"
                  onChange={handleChange("lastName")}
                />
                {errors.lastName && (
                  <ErrorMessage>{errors.lastName}</ErrorMessage>
                )}
              </InputDiv>
            </FormControl>

            <FormControl>
              <Label for="email">Email</Label>
              <InputDiv>
                <Input
                id="email"
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange("email")}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                )}
              </InputDiv>
            </FormControl>

            <FormControl>
              <Label for="password">Password</Label>
              <InputDiv>
                <Input
                id="password"
                  type="password"
                  placeholder="Enter Password"
                  onChange={handleChange("password1")}
                />
                {errors.password1 && (
                  <ErrorMessage>{errors.password1}</ErrorMessage>
                )}
              </InputDiv>
            </FormControl>
            <FormControl>
              <Label for="password2">Password</Label>
              <InputDiv>
                <Input
                id="password2"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange("password2")}
                />
                {errors.password2 && (
                  <ErrorMessage>{errors.password2}</ErrorMessage>
                )}
              </InputDiv>
            </FormControl>
            <InlineDiv>
              <Label for="gender">Gender</Label>
              <InlineDiv>
                <input type="radio" name="gender" id="gender" value="Male" />
                <Label for="gender">Male</Label>
              </InlineDiv>
              <InlineDiv>
                <input type="radio" name="gender" id="gender" value="Female" />
                <Label for="gender">Female</Label>
              </InlineDiv>
            </InlineDiv>

            <SubmitButton  type="submit">
              Registration
            </SubmitButton>

            <Formfooter>
                You have an account ? <NavLink to="/login">login</NavLink>
            </Formfooter>
          </form>
        </FormContainer>
        </Scroll>
      </Content>
    </Container>
   </Div>
  );
}
