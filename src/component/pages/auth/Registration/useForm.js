import React from "react";
import validateInfo from "./validateInfo";
import validateInput from "./validateInput";
const useForm = (validate) => {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (key) => (event) => {
      let value=event.target.value;
    setUser((oldData) => ({
      ...oldData,
      [key]: value,
    
    }));
    setErrors(validateInput(key,value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(user));

  };
  return {handleChange,handleSubmit,errors,user};
};

export default useForm;
