import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  box-sizing: border-box;
  background-color:#376e6f;
  width: 550px;
  padding: 10px;
  border: 2px solid #f1f1f1;
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
  padding: 5px 25px;
  @media only screen and (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
  input {
    width: 100%;
    margin-left: auto;
    padding: 10px 20px;

    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 5px;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }

  label {
    width: 100%;
    margin-right: 0px;
  }
`;

export const ButtonContainer = styled.div`
  box-sizing: border-box;
  margin-top: 10px;
  padding: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`

  background-color:#1c3334;
  color: white;
  padding: 10px;

  border: 1px solid white ;

  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  
`;
