import React, {useState} from 'react'
// import user from './data'
import {Container,
    InnerContainer,
    H2,
    LableAndInput,
    ButtonContainer,
    Button
} from './ResetStyle'

export default function Reset() {
    const currPass = "asfghjkl";
    const [password, setPassword] = useState("");
    // console.log(password);
    const [confirmPassErr, setConfirmPassErr] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [newPass, setNewPass] = useState("");
    const [reEnterPass, setReEnterPass] = useState("");
    

    const validate = (e) => {
        e.preventDefault();
        if (password != currPass){
            setConfirmPassErr("Wrong Password Entered!");
        }

        else if(newPass.length<6){
            setPasswordError("Password should be more than 6 characters")
        }

        else if (reEnterPass != newPass) {
            setPasswordError("Passwords do not match")
        }

        else {
            // localStorage.setItem("userDetails", JSON.stringify(data));
            // setConfirmPassErr("")
            // setPasswordError("")
            // setNewPass("")
            // setPassword("")
            // setReEnterPass("")
        }
    }


    return (
        <Container>
            <InnerContainer>
            <H2>Reset Password</H2>
            <form method='PUT'>
                <LableAndInput>
                    <label for='curr-pass'>Current Password</label>
                        <input type='password' id='curr-pass' onChange={(e) => setPassword(e.target.value)}/>
                        {confirmPassErr ? (
                        <p style={{ color: "red", fontSize:"12px" }}>{confirmPassErr}</p>
                        ) : null}
                    <br />
                    <label for ='new-pass'>New Password</label>
                        <input type='password' id='new-pass' onChange={(e) => setNewPass(e.target.value)}/>
                    
                    <label for='re-enter-pass'>Re-enter Password</label>
                        <input type='password' id='re-enter-pass' onChange={(e) => setReEnterPass(e.target.value)}/>
                        {passwordError ? (
                        <p style={{ color: "red", fontSize:"12px" }}>{passwordError}</p>
                        ) : null}
                </LableAndInput>

                <ButtonContainer>
                    <Button type='submit' onClick={validate}>Submit</Button>
                </ButtonContainer>
            </form>
            {/* {confirmPass?
            <form >
            
             <button type='submit' onClick={change}>Submit</button>
            </form>:<p>Wrong password entered</p>} */}
            </InnerContainer>
        </Container>   
        
    )
}
