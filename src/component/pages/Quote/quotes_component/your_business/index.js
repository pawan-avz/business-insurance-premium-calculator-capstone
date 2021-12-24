import React from "react";
import useForm from "./useForm";
import {
  Container,
  Content,
  FormHeading,
  FormContainer,
  FormControl,
  InlineDiv,
  Input,ErrorMessage,
  InputDiv,Checkbox,
  Label,Select,BackButton,ContinueButton,ButtonDiv
} from "../../../form/FormComponent";
import StepContext from "../../step/StepContext";
import { NavLink, Switch } from "react-router-dom";
import Left from "../../Left";
const registred = ["Association", "Corporation", "Indivisual", "Partnership"];

const property=[{
    id:'1',
    label:"car"}
    ,{
        id:2,
        label:"laptop"
    },{
        id:3,
        label:"computer"
    }
]
export default function Index() {
  const { handleChange,business, handleSubmit,errors } = useForm();
  const step=React.useContext(StepContext);
  const {changeBack,changeNext,steps}=step;  
  return (
    <div className="quotes_container">
<Left step={3}/>

    <div className="right_side">
    <Container>
      <Content>
        <FormHeading>Your Business</FormHeading>
        <FormContainer>
          <form>
            <FormControl>
              <Label for="registered">How is your business registered ?</Label>
              <InputDiv>
                <Select required onChange={handleChange("registered")} id="registered">
                {registred.map((data) => (
                  <option value={data}>{data}</option>
                ))}
               </Select>
             
              </InputDiv>
            </FormControl>
            <FormControl>
              <Label for="date">
                What date would you like coverage to start ?
              </Label>
              <InputDiv>
                <Input
                  id="date"
                  type="date"
                
                  required
                  onChange={handleChange("date")}
                />
                {errors.date && (
                  <ErrorMessage>{errors.date}</ErrorMessage>
                )}
              </InputDiv>
            </FormControl>
            <FormControl>
              <Label for="property">
                Enter peoperty
              </Label>
              <InputDiv>
                <Input
                  id="property"
                  type="text"
                
                  required
                  onChange={handleChange("property")}
                />
                {errors.property && (
                  <ErrorMessage>{errors.property}</ErrorMessage>
                )}
              </InputDiv>
            </FormControl>
            
          </form>
          
        </FormContainer>
       
        
      </Content>
      <ButtonDiv>
      <NavLink to={`/quote/form1`}>
      <BackButton onClick={changeBack}> back</BackButton>
              
      </NavLink>

             <ContinueButton onClick={handleSubmit} >continue </ContinueButton>

      </ButtonDiv>
   
      
    </Container>
    </div>
    </div>
  
  );
}
