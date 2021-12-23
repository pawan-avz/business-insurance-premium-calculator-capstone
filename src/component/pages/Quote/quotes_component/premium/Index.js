import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import StepContext from "../../step/StepContext";
import { connect } from "react-redux";
import {
  Container,
  HeadingDiv,
  ContentDiv,
  ContinueButton,
  BackButton,
  ButtonDiv,
  UL,
} from "./PremiumStyle";

function Index({ user }) {
  const [isLoad, setIsLoad] = useState(true);
  const [data, setData] = useState({});
  const step = React.useContext(StepContext);
  const { changeBack, changeNext, steps } = step;
  const DATA = [
    "Simple Premium",
    data.insuranceType,
    data.insuranceSubType,
    data.item,
    data.basePremium,
  ];

  //feth data from backedn to show premium sheet
  useEffect(() => {
    axios
      .post("http://localhost:8080/quote/premium-calculation/", {
        email: user.username,
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setIsLoad(false);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, isLoad);

  //send data to save premium table
  const savePremium = async () => {
    await axios
      .post("http://localhost:8080/quote/save-premium/", {
        premium: data.basePremium,
        propertyId: user.username,
      })
      .then((response) => {
        console.log(response);
        changeNext();
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <>
      {isLoad ? (
        <p>Loading...</p>
      ) : (
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
                {["Insurer", "Insurance", "Category", "Product", "Premium"].map(
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
              <ContinueButton onClick={savePremium}>buy now</ContinueButton>
            </ButtonDiv>
          </Container>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user.users,
  };
};

export default connect(mapStateToProps)(Index);
