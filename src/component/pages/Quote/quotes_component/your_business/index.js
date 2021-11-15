import React from "react";
import {
  Container,
  Content,
  FormHeading,
  FormContainer,
  FormControl,
  InlineDiv,
  Input,
  InputDiv,Checkbox,
  Label,Select
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
export default function index() {
  return (
    <Container>
      <Content>
        <FormHeading>Your Business</FormHeading>
        <FormContainer>
          <form>
            <FormControl>
              <Label for="fName">How is your business registered ?</Label>
              <InputDiv>
                <Select>
                {registred.map((data) => (
                  <option value={data}>{data}</option>
                ))}
               </Select>
                {/* {errors.firstName && (
                  <ErrorMessage>{errors.firstName}</ErrorMessage>
                )} */}
              </InputDiv>
            </FormControl>
            <FormControl>
              <Label for="fName">
                What date would you like coverage to start ?
              </Label>
              <InputDiv>
                <Input
                  id="fName"
                  type="date"
                  placeholder="Enter first name"
                  //   onChange={handleChange("firstName")}
                />
                {/* {errors.firstName && (
                  <ErrorMessage>{errors.firstName}</ErrorMessage>
                )} */}
              </InputDiv>
            </FormControl>
            <FormControl>
              <Label for="gender">select your property</Label>
              {
                  property.map((item)=><Checkbox label={item.label} id={item.id}/>)
              }
            
            </FormControl>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
}
