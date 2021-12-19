import React from "react";
import {
  SocialLogin,
  OrSeprator,
  OrText,
  SocialButton,
  SocialBtn,
} from "../LoginStyle";
import googleLogo from "../../../../images/google.png";
const LoginWithGoogle = () => {
  return (
    <>
      <SocialLogin>
        <SocialBtn href="http://localhost:8080//oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect">
          <img width="25px" height="25px" src={googleLogo} alt="Google" />
          <span>Log in with Google</span>
        </SocialBtn>
      </SocialLogin>

      <OrSeprator>
        <OrText>OR</OrText>
      </OrSeprator>
    </>
  );
};
export default LoginWithGoogle;
