import React from "react";
import validateInfo from "./validateInfo";
import validateInput from "./validateInput";
import { Domain } from "../../../../Config";
import { useHistory } from "react-router-dom";
import axios from "axios";
const useForm = (validate) => {
  let history=useHistory()
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    password2: "",
  });
  const [register,setRegister]=React.useState({
    isLoading:false,
    success:'',
    errors:""
  })
  const [errors, setErrors] = React.useState({});

  const handleChange = (key) => (event) => {
      let value=event.target.value;
    setUser((oldData) => ({
      ...oldData,
      [key]: value,
    
    }));
    setErrors(validateInput(key,value));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {newerrors,valid}=validateInfo(user)
    setErrors(newerrors);
    if(valid){
      const REGISTER_URL=Domain+"/register"
      
     
      setRegister((prev)=>({...prev,isLoading:true}))

      await axios
      .post(REGISTER_URL,user)
      .then(response=>{
        console.log(response);
        setRegister({isLoading:false,success:response.data,error:''})
        history.push("/login","account is created successfully")
      })
      .catch((errors)=>{
      
       setRegister((prev)=>({isLoading:false,errors:errors.message,success:""}))
      })
    }


  };
  return {handleChange,handleSubmit,errors,user,register};
};

export default useForm;
