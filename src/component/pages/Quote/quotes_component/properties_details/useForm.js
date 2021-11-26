import React from "react";
import validateForm from "./validateForm";
import StepContext from "../../step/StepContext";
import { useHistory } from "react-router-dom";
const useForm = (validate) => {
  let history = useHistory();

  let arr = JSON.parse(localStorage.getItem("selected_business"));

  let initialState = {};
  let initialState2 = {};
  let input = {
    brandName: "",
    model: "",
    rate: "",
    date: "",
  };

  arr.forEach((property) => {
    initialState[property] = input;
  });

  const [properties, setProperty] = React.useState(JSON.parse(JSON.stringify(initialState)));
  const step = React.useContext(StepContext);
  const { changeBack, changeNext, steps } = step;
  const [errors, setErrors] = React.useState(JSON.parse(JSON.stringify(initialState)));

  const handleChange = (key) => (key1) => (event) => {
    let value = event.target.value;

    setProperty((oldData) => ({
      ...oldData,
      [key]: {
        ...oldData[key],
        [key1]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newerrors, flag } = validateForm(
      properties,
      JSON.parse(JSON.stringify(initialState))
    );

    setErrors(newerrors);
    console.log(initialState, "inittial");
    console.log(errors, "errors");
    if (!flag) {
      localStorage.setItem("selected_property", JSON.stringify(properties));
      changeNext();
      history.push(`/quote/form5`);
    }
  };

  return { handleChange, handleSubmit, errors, properties };
};

export default useForm;
