import React, { useState } from "react";
import validateForm from "./validateForm";
import StepContext from "../../step/StepContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Domain } from "../../../../../Config";
const useForm = (user) => {
  let history = useHistory();
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { newerrors, flag } = validateForm(properties);

    setErrors(newerrors);

    if (properties) {
      console.log(properties, "sumdjhbjhfd");
      // localStorage.setItem("selected_property", JSON.stringify(properties));
      // changeNext();
      // history.push(`/quote/form5`);
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
      await axios
        .post(url, data)

        .then((response) => {
          changeNext();
          history.push(`/quote/form4`);
        })
        .catch((errors) => {
          console.log(errors);
        });
    }
  };

  return { handleChange, handleSubmit, errors, properties };
};

export default useForm;
