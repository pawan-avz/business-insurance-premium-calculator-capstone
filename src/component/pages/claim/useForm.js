import React from 'react'

const validateForm=(data)=>{
    let error;
    let invalid=false;
    if(!data.trim()){
        error="this field is required *"
        invalid=true;
    }
    return {error,invalid}
}
const useForm=()=>{
    const [state, setstate] =React.useState("");
    const [error, setError] =React.useState("");

   const handleChange=(e)=>{
       const value=e.target.value;
       setstate(value);
   }
   const handleSubmit=(e)=>{
       e.preventDefault()
      const {error,invalid}= validateForm(state);
      setError(error)
      console.log(error,state);
      if(!invalid){
          console.log("submit")
      }

   }

   return {handleChange,handleSubmit,error,state};
}

export default useForm;