import React from 'react';
const useForm=()=>{
    const [business,setBusiness]=React.useState({
        registered:"",
        date:"",
        property:[]
    });


    const handleChange = (key) => (event) => {
        let value=event.target.value;
      setBusiness((oldData) => ({
        ...oldData,
        [key]: value,
      
      }));
   
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

  
    };
    return {handleChange,handleSubmit,business};
}

export default useForm;