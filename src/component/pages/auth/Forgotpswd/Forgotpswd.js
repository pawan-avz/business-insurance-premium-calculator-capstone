import React,{useState} from 'react'
import { ErrorMessage } from '../../form/FormComponent';
import {
    Container,
    InnerContainer,
    H2,
    LableAndInput,
    ButtonContainer,
    Button
} from "./fgtpswdstyle"
const Forgotpswd = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("")

    const handlechange=(event) =>{
     
    setEmail(
        event.target.name=event.target.value
    )
    }
     
    const handleclick= (event)=>{
        event.preventDefault();
       setError(validate())
    }

    const validate = () =>{
         let error ="" ;
         const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
         if(!email){
             error="Email is required *" ;
         }else if(!regex.test(email)){
             error = "Email is not valid *"
         }
      return error ;
    }

    return (
      <Container>
         <InnerContainer>
           <H2>Forgot password ?  </H2>
             <form method="POST">
                 <LableAndInput>
                     <label for="email">Enter your email :</label>
                     <input type="email"
                     id="email"
                     name="email"
                     placeholder="enter your email"
                     onChange={handlechange}
                     />
                     {error && <ErrorMessage style={{color:"#DA7B93"}}>{error}</ErrorMessage>}
                 </LableAndInput>
                 <ButtonContainer>
                       <Button  onClick={handleclick}>Reset</Button>
                 </ButtonContainer>
             </form>
          </InnerContainer>
      </Container>
    )
}
export default Forgotpswd;