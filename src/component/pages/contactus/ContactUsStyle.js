import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grip-gap: 0px;
  background-image: linear-gradient(to right, lightblue, white);
  @media only screen and (max-width: 600px) {
    grid-template-rows: auto;
  }
`;

export const InnerContainer = styled.div`
  box-sizing: border-box;
  width: 60%;
  padding: 10px;
  align-item: center;
  margin-top: 60px;
  //   border: 2px solid #f1f1f1;
  border: none;
  border-radius: 5px;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const H2 = styled.h2`
  text-align: left;
  padding: 25px;
  margin-bottom: 3px;
  border-radius: 10px;
`;

export const LableAndInput = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
  input {
    width: 500px;
    margin-left: auto;
    padding: 15px 20px;
    margin: 10px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 5px;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }

  label {
    width: 200px;
    margin-right: 0px;
    text-align: left;
  }
`;

export const ButtonContainer = styled.div`
  box-sizing: border-box;
  margin-top: 10px;
  padding: 25px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  color: #292929;
  padding: 8px;
  border: none;
  cursor: pointer;
  margin-left: 26%;
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:hover {
    background-color: #38af83 !important;
    color: #fff;
  }
`;

export const ContactDetails = styled.div`
  border: none;
  box-sizing: border-box;
  color: white;
  //   margin-left: 50px;
  padding: 10px;
  background-image: linear-gradient(to bottom, rgb(4, 60, 190), white);
  padding: 4%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;
