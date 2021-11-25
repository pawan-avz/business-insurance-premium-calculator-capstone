import React from "react";
import validateForm from "./validateForm";

const useForm = (validate) => {
  const [property, setProperty] = React.useState({});

  const [errors, setErrors] = React.useState({});

  const handleChange = (key) =>(key1)=> (event) => {
      let value=event.target.value;
      console.log("key",key,"key1",key1,"value",value)
     
    setProperty((oldData) => ({
      ...oldData,
      [key]:{
               ...oldData[key],
               [key1]:value
            }
    
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(property)
    setErrors(validateForm(property));
    console.log(errors)

  };
  return {handleChange,handleSubmit,errors,property};
};

export default useForm;
