import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Switch } from "react-router-dom";
import StepContext from "../../step/StepContext";
import { connect } from "react-redux";
import Left from "../../Left";
import axios from "axios";
import {
  HeadingDiv,
  ContentDiv,
  // ButtonDiv,
  UL,
} from "../premium/PremiumStyle";
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
function Index({ user }) {
  const [isData, setData] = React.useState(false);
  const { handleChange, properties, handleSubmit, errors, state } = useForm(
    user,
    setData
  );

  const savePremium = async () => {
    await axios
      .post("http://localhost:8080/quote/save-premium/", {
        premium: state.success.basePremium,
        propertyId: user.username,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div className="quotes_container">
     {isData? <Left step={5} />: <Left step={4} />}

      {isData ? (
        <div className="right_side">
          <HeadingDiv>
            <div>
              <p>Premium Sheet</p>
            </div>
          </HeadingDiv>
          <Container>
            <ContentDiv>
              <UL class="responsive-table">
                <li class="table-row">
                  <div class="col col-6">Insurer</div>
                  <div class="col col-6 text-right">Simple Premium</div>
                </li>
                <li class="table-row">
                  <div class="col col-6">Insurance</div>
                  <div class="col col-6 text-right">
                    {state.success.insuranceType}
                  </div>
                </li>{" "}
                <li class="table-row">
                  <div class="col col-6">Category</div>
                  <div class="col col-6 text-right">
                    {state.success.insuranceSubType}
                  </div>
                </li>{" "}
                <li class="table-row">
                  <div class="col col-6">Product</div>
                  <div class="col col-6 text-right">{state.success.item}</div>
                </li>{" "}
                <li class="table-row">
                  <div class="col col-6">Premium</div>
                  <div class="col col-6 text-right">
                    {state.success.basePremium}
                  </div>
                </li>
              </UL>
            </ContentDiv>
            <ButtonDiv>
              <NavLink to={`/quote/form3`}>
                <BackButton>back</BackButton>
              </NavLink>
              <ContinueButton onClick={savePremium}>Buy </ContinueButton>
            </ButtonDiv>
          </Container>
        </div>
      ) : (
        <div className="right_side">
          <Container>
            <Content>
              <FormHeading>Properties details</FormHeading>
              <Scroll>
                <FormContainer>
                  <form>
                    {inputData.map((data) => (
                      <FormControl>
                        <Label for={data.id}>{data.label}</Label>
                        <InputDiv>
                          <Input
                            id={data.id}
                            required
                            type={data.type}
                            placeholder={data.label}
                            onChange={handleChange(data.id)}
                          />
                          {errors && <ErrorMessage>{errors}</ErrorMessage>}
                        </InputDiv>
                      </FormControl>
                    ))}
                  </form>
                </FormContainer>
              </Scroll>
            </Content>
            <ButtonDiv>
              <NavLink to={`/quote/form2`}>
                <BackButton> back</BackButton>
              </NavLink>

              <ContinueButton onClick={handleSubmit}>
                {state.isLoading ? "loding..." : "continue"}
              </ContinueButton>
            </ButtonDiv>
          </Container>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user.users,
  };
};

export default connect(mapStateToProps)(Index);
