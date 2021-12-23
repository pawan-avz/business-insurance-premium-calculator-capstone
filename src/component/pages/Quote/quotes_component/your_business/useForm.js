import React from "react";
import validateForm from "./validateForm";
import { useHistory } from "react-router-dom";
import StepContext from "../../step/StepContext";

const useForm = () => {
  const step = React.useContext(StepContext);

  const { changeBack, changeNext, steps } = step;

  let history = useHistory();
  const [business, setBusiness] = React.useState({
    registered: "",
    date: "",
    property: "",
  });
  const [errors, setErrors] = React.useState({});
  const handleChange = (key) => (event) => {
    let value = event.target.value;

    setBusiness((oldData) => ({
      ...oldData,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(business);
    let error = validateForm(business);
    setErrors(error);

    if (Object.keys(error).length === 0 && business.property.length > 0) {
      changeNext();
      localStorage.setItem("selected_business", JSON.stringify(business));
      history.push(`/quote/form3`);
    }
  };
  return { handleChange, handleSubmit, business, errors };
};

export default useForm;
