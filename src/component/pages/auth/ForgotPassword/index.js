import axios from "axios";
import React, { useState } from "react";
import { Domain } from "../../../../Config";
import { ErrorMessage, SuccessMessage } from "../../form/FormComponent";
import { connect } from "react-redux";
import {
  Container,
  InnerContainer,
  H2,
  LableAndInput,
  ButtonContainer,
  Button,
} from "./ResetStyle";

function Reset({ user }) {
  const [password, setPassword] = useState("");

  const [confirmPassErr, setConfirmPassErr] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reEnterPass, setReEnterPass] = useState("");
  const [state, setstate] = useState({
    isLoading: false,
    success: "",
    error: "",
  });
  const validate = () => {
    let valid = true;

    if (newPass.length < 6) {
      valid = false;
      setPasswordError("Password should be more than 6 characters");
    } else if (!/[A-Z]/.test(newPass)) {
      valid = false;
      setPasswordError("Password must contain Uppercase letter");
    } else if (!/[0-9]/.test(newPass)) {
      valid = false;
      setPasswordError("Passsword must contain a number");
    } else if (!/\W/.test(newPass)) {
      valid = false;
      setPasswordError("Password must contain a Special character");
    } else if (reEnterPass != newPass) {
      valid = false;
      setPasswordError("Passwords do not match");
    } else {
      setConfirmPassErr("");
      setPasswordError("");
    }
    return valid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate();
    if (valid) {
      const mail = user.username;
      const URL = Domain + "/change-password";
      const body = {
        oldPassword: password,
        newPassword: newPass,
        username: mail,
      };
      setstate((prev) => ({ ...prev, isLoading: true }));
      axios
        .post(URL, body)
        .then((res) => {
          setstate({
            isLoading: false,
            success: "Password changed Sucessfully",
            error: "",
          });
          setPassword("");
          setNewPass("");
          setReEnterPass("");
        })
        .catch((errors) => {
          setstate({
            isLoading: false,
            success: "",
            error: "Old password is not matched",
          });
        });
    }
  };

  return (
    <Container>
      <InnerContainer>
        {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
        {state.success && <SuccessMessage>{state.success}</SuccessMessage>}
        <H2>Reset Password</H2>
        <form method="PUT">
          <LableAndInput>
            <label for="curr-pass">Current Password</label>
            <input
              type="password"
              id="curr-pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {confirmPassErr ? (
              <p style={{ color: "#da7b93", fontSize: "12px ", fontWeight:"bold" }}>{confirmPassErr}</p>
            ) : null}
            <br />
            <label for="new-pass">New Password</label>
            <input
              type="password"
              value={newPass}
              id="new-pass"
              onChange={(e) => setNewPass(e.target.value)}
            />

            <label for="re-enter-pass">Re-enter Password</label>
            <input
              type="password"
              id="re-enter-pass"
              value={reEnterPass}
              onChange={(e) => setReEnterPass(e.target.value)}
            />
            {passwordError ? (
              <p style={{ color: "#da7b93", fontSize: "12px", fontWeight:"bold" }}>{passwordError}</p>
            ) : null}
          </LableAndInput>

          <ButtonContainer>
            <Button type="submit" onClick={handleSubmit}>
              {state.isLoading ? "Loading...." : " Submit"}
            </Button>
          </ButtonContainer>
        </form>
      </InnerContainer>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user.users,
  };
};

export default connect(mapStateToProps)(Reset);
