import React from "react";
import validateForm from "./validateForm";
import { useHistory } from "react-router-dom";

const useForm = () => {
  let history=useHistory();
  const [business, setBusiness] = React.useState({
    registered: "",
    date: "",
    property: [],
  });
  const [errors, setErrors] = React.useState({});
  const handleChange = (key) => (event) => {
    let value = event.target.value;
    if (key === "property") {
      setBusiness((oldData) => ({
        ...oldData,
        [key]: [...oldData.property, value],
      }));
    } else {
      setBusiness((oldData) => ({
        ...oldData,
        [key]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(business)) 
   
    if(Object.keys(errors).length === 0 && business.property.length>0){
      
      localStorage.setItem("selected_assets", JSON.stringify(business.property));
      history.push('/quote/form4');
    }
    
  };
  return { handleChange, handleSubmit, business ,errors};
};

export default useForm;
