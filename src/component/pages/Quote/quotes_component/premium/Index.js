import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Left from "../../Left";
import StepContext from "../../step/StepContext";
import { connect } from "react-redux";
import { BackButton, ContinueButton } from "../../../form/FormComponent";
import { useLocation } from "react-router-dom";


function Index({ user }) {
  const [data, setData] = useState();
  const step = React.useContext(StepContext);
  const { changeBack, changeNext, steps } = step;
  const location = useLocation();
  console.log(location, "loaction");
  // const DATA = [
  //   "Simple Premium",
  //   data.insuranceType,
  //   data.insuranceSubType,
  //   data.item,
  //   data.basePremium,
  // ];

  //feth data from backedn to show premium sheet
  // useEffect( async() => {
  //  await axios
  //     .post("http://localhost:8080/quote/premium-calculation/", {
  //       email: user.username,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch((errors) => {
  //       console.log(errors);

  //     });
  // });

  //send data to save premium table
  const savePremium = async () => {
    await axios
      .post("http://localhost:8080/quote/save-premium/", {
        premium: data.basePremium,
        propertyId: user.username,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return {savePremium};
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user.users,
  };
};

export default connect(mapStateToProps)(Index);
