import React from 'react'
import {
    Container,
    InnerContainer,
    H2,
    LableAndInput,
    ButtonContainer,
    Button
} from "./fgtpswdstyle"
const Forgotpswd = () => {
    return (
      <Container>
         <InnerContainer>
           <H2>Forgot password ?  </H2>
             <form >
                 <LableAndInput>
                     <label for="email">Enter your email :</label>
                     <input type="email"
                     id="email"
                     placeholder="enter your email"
                     />
                 </LableAndInput>
                 <ButtonContainer>
                       <Button>Reset</Button>
                 </ButtonContainer>
             </form>
          </InnerContainer>
      </Container>
    )
}
export default Forgotpswd;