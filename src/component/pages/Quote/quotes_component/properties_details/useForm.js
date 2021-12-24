import React, { useState } from "react";
import validateForm from "./validateForm";
import StepContext from "../../step/StepContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Domain } from "../../../../../Config";
const useForm = (user, setData) => {
  const [state, setState] = React.useState({
    isLoading: false,
    success: "",
    error: "",
  });

  let business = JSON.parse(localStorage.getItem("selected_business"));

  const [properties, setProperty] = React.useState({
    brandName: "",
    model: "",
    rate: "",
    date: "",
  });
  const step = React.useContext(StepContext);
  const { changeBack, changeNext, steps } = step;
  const [errors, setErrors] = React.useState();

  const handleChange = (key) => (event) => {
    let value = event.target.value;

    setProperty((oldData) => ({
      ...oldData,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newerrors, flag } = validateForm(properties);

    setErrors(newerrors);

    if (properties) {
      const data = {
        item: business.property,
        model: properties.model,
        purchaseRate: properties.rate,
        purchaseDate: properties.date,
        coverageDate: business.date,
        insuranceType: localStorage.getItem("insurance"),
        insuranceSubType: business.registered,
        email: user.username,
      };

      const url = Domain + "/quote/property-details/";
      setState((prev) => ({ ...prev, isLoading: true }));
      axios
        .post(url, data)

        .then((response) => {
          console.log(response.data, "response");
          setState({
            isLoading: false,
            success: response.data,
            error: "",
          });
          setData(true);
        })
        .catch((errors) => {
          setState({
            isLoading: false,
            success: "",
            error: "data not added",
          });
        });
    }
  };

  return { handleChange, handleSubmit, errors, properties, state };
};

export default useForm;
