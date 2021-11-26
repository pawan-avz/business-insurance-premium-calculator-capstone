import React from "react";
import validateForm from "./validateForm";
import StepContext from "../../step/StepContext";
const useForm = (validate) => {
  const [property, setProperty] = React.useState({});
  const step=React.useContext(StepContext);
  const {changeBack,changeNext,steps}=step;
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
    changeNext()

  };
  return {handleChange,handleSubmit,errors,property};
};

export default useForm;
