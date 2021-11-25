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
  return (
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
              <Label for="property">select your property</Label>
              {
                  property.map((item)=><Checkbox label={item.label} id={item.id} change={handleChange}/>)
              }
              {errors.property && (
                  <ErrorMessage>{errors.property}</ErrorMessage>
                )}
            </FormControl>
            
          </form>
          
        </FormContainer>
       
        
      </Content>
      <ButtonDiv>
      <BackButton> back</BackButton>
        <ContinueButton onClick={handleSubmit} >continue </ContinueButton>
      </ButtonDiv>
   
      
    </Container>
  );
}
