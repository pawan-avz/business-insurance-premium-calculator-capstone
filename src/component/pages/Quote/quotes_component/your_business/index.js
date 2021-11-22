import React from "react";
import useForm from "./useForm";
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
import { Button } from "@mui/material";
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
  const { handleChange,business, handleSubmit } = useForm();
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
                {/* {errors.firstName && (
                  <ErrorMessage>{errors.firstName}</ErrorMessage>
                )} */}
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
                {/* {errors.firstName && (
                  <ErrorMessage>{errors.firstName}</ErrorMessage>
                )} */}
              </InputDiv>
            </FormControl>
            <FormControl>
              <Label for="gender">select your property</Label>
              {
                  property.map((item)=><Checkbox label={item.label} id={item.id} change={handleChange}/>)
              }
            
            </FormControl>
            <Button onClick={handleSubmit} >Submit</Button>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
}
