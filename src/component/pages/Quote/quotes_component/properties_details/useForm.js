import React from "react";
import validateForm from "./validateForm";
import StepContext from "../../step/StepContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
const useForm = (validate) => {
  let history = useHistory();

  let business = JSON.parse(localStorage.getItem("selected_business"));

  const [properties, setProperty] = React.useState({
    item: business,
    brandName: "",
    model: "",
    rate: "",
    date: "",
    email: "gowri@gmail.com",
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
        email: "manish@gmail.com",
        name: properties.name,
        brand_name: properties.brandName,
        model: properties.model,
        purchase_rate: properties.rate,
        purchase_date: properties.date,
      };
      // await axios
      //   .post("http://localhost:8080/save-property", data)
      //   .then((response) => {
      //     changeNext();
      //     history.push(`/quote/form4`);
      //   })
      //   .catch((errors) => {
      //     console.log(errors);
      //   });
      history.push(`/quote/form4`);
    }
  };

  return { handleChange, handleSubmit, errors, properties };
};

export default useForm;
