import React, { useState } from "react";
import StepContext from "../../step/StepContext";
import { NavLink, useHistory } from "react-router-dom";
import {
  InputDiv,
  Input,
  Label,
  FormControl,Container,Content
} from "../../../form/FormComponent";
import {
  
  FormHeading,
  FormContainer,
  ButtonDiv,
  BackButton,
  Scroll,
  ContinueButton,
} from "./styled";
import Validation from "./Validation";
export default function Index() {
  let history = useHistory();
  const step = React.useContext(StepContext);
  const { changeBack, changeNext, steps } = step;
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    dob: "",
    city: "",
    state: "",
    pincode: "",
  });
  const handlechange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmits = (event) => {
    event.preventDefault();
    const { newerrors, invalid } = Validation(values);
    setErrors(newerrors);

    if (!invalid) {
      changeNext();
      console.log("submit3");
      history.push("/quote/form3");
    }
  };

  return (
    <Container>
      <Content>
        <FormHeading>About You</FormHeading>
        <Scroll>
          <FormContainer>
            <form>
              <FormControl>
                <Label for="name">Full name :</Label>
                <InputDiv>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="enter your name :"
                    onChange={handlechange}
                  />
               
                  {errors.name && <p>{errors.name}</p>}
                </InputDiv>
              </FormControl>
              <FormControl>
                <Label for="email">Email :</Label>
                <InputDiv>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="enter your email :"
                    onChange={handlechange}
                  />
               
                  {errors.email && <p>{errors.email}</p>}
                </InputDiv>
              </FormControl>
              <FormControl>
                <Label for="mobile">Mobile No :</Label>
                <InputDiv>
                  <Input
                    type="text"
                    id="mobile"
                    name="mobile"
                    placeholder="enter your mobile no :"
                    onChange={handlechange}
                  />
               
                  {errors.mobile && <p>{errors.mobile}</p>}
                </InputDiv>
              </FormControl>

              <FormControl>
                <Label for="address">Address :</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="enter your address :"
                  onChange={handlechange}
                />
             
                {errors.address && <p>{errors.address}</p>}
              </FormControl>
              <FormControl>
                <Label for="dob">Date of birth :</Label>
                <Input
                  type="date"
                  id="dob"
                  name="dob"
                  onChange={handlechange}
                />
             
                {errors.dob && <p>{errors.dob}</p>}
              </FormControl>
              <FormControl>
                <Label for="city">City :</Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="enter your city :"
                  onChange={handlechange}
                />
                {errors.city && <p>{errors.city}</p>}
              </FormControl>
              <FormControl>
                <Label for="state">State :</Label>
                <Input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="enter your state :"
                  onChange={handlechange}
                />
                {errors.state && <p>{errors.state}</p>}
              </FormControl>
              <FormControl>
                <Label for="pincode">Pincode :</Label>
                <Input
                  type="text"
                  id="pincode"
                  name="pincode"
                  placeholder="enter your pincode :"
                  onChange={handlechange}
                />
             
                {errors.pincode && <p>{errors.pincode}</p>}
              </FormControl>
            </form>
          </FormContainer>
        </Scroll>
      </Content>
      <ButtonDiv>
        <NavLink to={`/quote/form1`}>
          <BackButton onClick={changeBack}> back</BackButton>
        </NavLink>
        <ContinueButton onClick={handlesubmits}>continue </ContinueButton>
      </ButtonDiv>
    </Container>
  );
}
