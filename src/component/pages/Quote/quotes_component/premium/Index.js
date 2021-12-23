import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import StepContext from "../../step/StepContext";
import {
  Container,
  HeadingDiv,
  ContentDiv,
  ContinueButton,
  BackButton,
  ButtonDiv,
  UL,
} from "./PremiumStyle";

function Index() {
  const [deductible, setDeductible] = useState("");
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");
  const [total, setTotal] = useState(0);
  const step = React.useContext(StepContext);
  const { changeBack, changeNext, steps } = step;
  const DATA = ["Simple Premium",data.insuranceType, "Business", data.item, data.basePremium];

  //feth data from backedn to show premium sheet
  useEffect(async () => {
    await axios
      .post("http://localhost:8080/quote/premium-calculation/", {
        email: "vikash@gmail.com",
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
    setTotal(data.basePremium);
  }, []);

  //send data to save premium table
  const savePremium = async () => {
    await axios
      .post("http://localhost:8080/quote/save-premium/", {
        basePremium: data.basePremium,
        deductible: deductible,
        total: total,
        propertyDetails: {
          propertyId: data.propertyId,
        },
      })
      .then((response) => {
        console.log(response);
        setMessage(response.data);
        changeNext();
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const handler = (e) => {
    setDeductible(e.target.value);
    setTotal(data.basePremium + (data.basePremium * deductible) / 100);
  };

  return (
    <>
      <HeadingDiv>
        <div>
          <p>Premium Sheet</p>
        </div>
        {/* <div>{swal(message)}</div> */}
      </HeadingDiv>
      <Container>
        <ContentDiv>
          <UL class="responsive-table">
            {["Insurer","Insurance", "Category", "Product", "Premium"].map(
              (data, index) => (
                <li class="table-row">
                  <div class="col col-1">{data}</div>
                  <div class="col col-2">
                    {typeof DATA[index] === "number"
                      ? "₹ " + DATA[index]
                      : DATA[index]}
                  </div>
                </li>
              )
            )}

           
          </UL>
        </ContentDiv>
        <ButtonDiv>
          <NavLink to={`/quote/form3`}>
            <BackButton onClick={changeBack}>back</BackButton>
          </NavLink>
          <ContinueButton onClick={savePremium}>purchase</ContinueButton>
        </ButtonDiv>
      </Container>
    </>
  );
}

export default Index;
