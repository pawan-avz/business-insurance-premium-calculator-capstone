import React from "react";
import validateForm from "./validateForm";
import StepContext from "../../step/StepContext";
import { useHistory } from "react-router-dom";
const useForm = (validate) => {
  let history = useHistory();

  let business = JSON.parse(localStorage.getItem("selected_business"));

const [properties, setProperty] = React.useState({
    name:business,
    brandName: "",
    model: "",
    rate: "",
    date: "",
    email:""
  });
  const step = React.useContext(StepContext);
  const { changeBack, changeNext, steps } = step;
  const [errors, setErrors] = React.useState();

  const handleChange = (key) =>(event) => {
    let value = event.target.value;

    setProperty((oldData) => ({
      ...oldData,
      [key]: value,
    }));
    console.log(properties);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newerrors, flag } = validateForm(properties);

    setErrors(newerrors);
 
    if (properties) {
      console.log(properties)
      // localStorage.setItem("selected_property", JSON.stringify(properties));
      // changeNext();
      // history.push(`/quote/form5`);
    }
  };

  return { handleChange, handleSubmit, errors, properties };
};

export default useForm;
