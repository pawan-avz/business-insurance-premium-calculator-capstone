import React,{useState} from 'react';
import StepContext from '../../step/StepContext';
import { NavLink ,useHistory} from 'react-router-dom';
import {
    Container,
    Content,
    FormHeading,
    FormContainer,
    ButtonDiv,
    BackButton,Scroll,
    ContinueButton
        } from './styled'
import Validation from "./Validation"        
export default function Index() {
    let history=useHistory()
    const step=React.useContext(StepContext);
    const {changeBack,changeNext,steps}=step; 
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        name:"",
        email:"",
        mobile:"",
        address:"",
        dob:"",
        city:"",
        state:"",
        pincode:""
    }) ;
    const handlechange =(e) =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        });
     
    }
    const handlesubmits =(event) =>{

        event.preventDefault();
        const {newerrors,invalid}=Validation(values);
        setErrors(newerrors);
       
       
        if(!invalid){
            changeNext();
            console.log("submit3");
            history.push("/quote/form3")

        }

    }

   
     
    return (
      <Container>
          <Content>
          <FormHeading>About You</FormHeading>
          <Scroll>

          <FormContainer>
              <form>
                     <label for="name">Full name :</label>
                     <input type="text"
                     id="name"
                     name="name"
                     placeholder="enter your name :"
                     onChange={handlechange}
                     /><br/>
                     {errors.name && <p>{errors.name}</p> }
                      <label for="email">Email :</label>
                     <input type="email"
                     id="email"
                     name="email"
                     placeholder="enter your email :"
                     onChange={handlechange}
                     /><br/>
                      {errors.email && <p>{errors.email}</p> }

                      <label for="mobile">Mobile No :</label>
                     <input type="text"
                     id="mobile"
                     name="mobile"
                     placeholder="enter your mobile no :"
                     onChange={handlechange}
                     /><br/>
                      {errors.mobile && <p>{errors.mobile}</p> }

                      <label for="address">Address :</label>
                     <input type="text"
                     id="address"
                     name="address"
                     placeholder="enter your address :"
                     onChange={handlechange}
                     /><br/>
                      {errors.address && <p>{errors.address}</p> }

                      <label for="dob">Date of birth :</label>
                     <input type="date"
                     id="dob"
                     name="dob"
                
                     onChange={handlechange}
                     /><br/>
                      {errors.dob && <p>{errors.dob}</p> }

                      <label for="city">City :</label>
                     <input type="text"
                     id="city"
                     name="city"
                     placeholder="enter your city :"
                     onChange={handlechange}
                     /><br/>
                      {errors.city && <p>{errors.city}</p> }

                       <label for="state">State :</label>
                     <input type="text"
                     id="state"
                     name="state"
                     placeholder="enter your state :"
                     onChange={handlechange}
                     /><br/>
                      {errors.state && <p>{errors.state}</p> }

                       <label for="pincode">Pincode :</label>
                     <input type="text"
                     id="pincode"
                     name="pincode"
                     placeholder="enter your pincode :"
                     onChange={handlechange}
                     /><br/>
                      {errors.pincode && <p>{errors.pincode}</p> }
          
              </form>

          </FormContainer>
          </Scroll>
          </Content>
          <ButtonDiv>
          <NavLink to={`/quote/form1`}>
          <BackButton onClick={changeBack}> back</BackButton>
        </NavLink>
            <ContinueButton onClick={handlesubmits} >continue </ContinueButton>
          </ButtonDiv> 
      </Container>
    )
}


