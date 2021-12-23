import styled from "styled-components";


export const Container = styled.div`
  height: 81vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  box-sizing: border-box;
  width: 40%;
  padding: 10px;
  border: 2px solid #f1f1f1;
  border-radius: 5px;
  background-color:#376E6F;
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
    text-align:left;
  }
  p{
    color:red;

  }
`;


export const ButtonContainer = styled.div`
  box-sizing: border-box;
  margin-top: 5px;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
background-color:#1C3334;
color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 95%;
  font-size:18px;
  border-radius: 5px;
 
`;