import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  box-sizing: border-box;
  width: 40%;
  padding: 10px;
  border: 1px solid #ccc;
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
  @media only screen and (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
  input {
    width: 100%;
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
    width: 100%;
    margin-right: 0px;
    text-align: center;
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
  background-color: transparent;
  outline-color: initial;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: rgb(61, 66, 68);
  padding: 15px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #38af83 !important;
    color: #fff;
  }
`;

export const LoginFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin-top: 10px;
    a {
      color: #38af83;
      text-decoration: none;
    }
  }
`;

export const SocialLogin = styled.div`
  width: 87%;
  margin: auto;
  text-align: center;
  padding: 10px;
  background-color: transparent;
  outline-color: initial;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SocialBtn = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: none;
  color: rgb(61, 66, 68);
  text-decoration: none;
  cursor: pointer;
`;

export const OrSeprator = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  position: relative;
  display: block;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1em;
`;

export const OrText = styled.span`
  background-color: transparent;
  position: absolute;
  left: 46%;
  top: 0;
  background: #fff;
  padding: 10px;
`;
