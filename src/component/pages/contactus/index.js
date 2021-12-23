import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
// import ButtonMailto from './ButtonMailto';
import { Domain } from "../../../Config";
import {
  Container,
  InnerContainer,
  H2,
  LableAndInput,
  ButtonContainer,
  Button,
  ContactDetails,
} from "./ContactUsStyle";
import axios from "axios";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setstate] = useState({
    // isSending:false,
    sent: "",
    error: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid()) {
      setstate({ sent: "Your Message has been sent successfully!", error: "" });
      console.log("This is handling submit");
      const url = Domain + "/save-contact";
      axios
        .post(url, {
          fullName: name,
          mobile: phoneNo,
          email: email,
          message: message,
        })
        .then((res) => {
          setstate({
            sent: "Your Message has been sent successfully!",
            error: "",
          });
          setEmail("");
          setMessage("");
          setName("");
          setPhoneNo("");
        })
        .catch((error) => {
          setstate({
            sent: "",
            error: "Something went wrong! ",
          });
        });
    }
  };

  const valid = (e) => {
    if (!name.trim()) {
      setstate({ sent: "", error: "*First name is required!" });
      return false;
    }
    if (!/[0-9]/.test(phoneNo)) {
      setstate({ sent: "", error: "*Contact number can only be digits!" });
      return false;
    }
    if (!email) {
      setstate({ sent: "", error: "*Email is required!" });
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setstate({ sent: "", error: "*Email is invalid!" });
      return false;
    }
    if (!message.trim()) {
      setstate({ sent: "", error: "*The Message field can't be Empty!" });

      return false;
    }
    return true;
  };

  return (
    <div
      style={{ backgroundImage: "linear-gradient(to right, lightblue, #376E6F)",minHeight:"100vh" }}
      className="container-fluid"
    >
      <div className="row">
        <div class="col-md-4 ">
          <img
            src="https://image.ibb.co/kUASdV/contact-image.png"
            alt="image"
          />
          <h2>Contact Us</h2>

          <h4>We would love to hear from you!</h4>
          <br />
          <br />
          <img src="https://westward360.com/wp-content/uploads//2021/01/Hero-Contact-Image.svg" />
          {/* <img src="https://icon-library.com/images/icon-contact-us/icon-contact-us-6.jpg" width="60px"/> */}
        </div>
        <div className="col-md-8">
          <InnerContainer>
            {state.error && (
              <p
                style={{
                  color: "#DA7B93",
                  fontSize: "13px",
                  textAlign: "right",
                  fontWeight:"bold"
                }}
              >
                {state.error}
              </p>
            )}
            {state.sent && (
              <p
                style={{
                  color: "white",
                  fontSize: "13px",
                  textAlign: "right",
                  fontWeight:"bold"
                }}
              >
                {state.sent}
              </p>
            )}
          </InnerContainer>
          <form method="POST">
            <LableAndInput>
              <label for="name">Full Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </LableAndInput>
            <LableAndInput>
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </LableAndInput>
            <LableAndInput>
              <label for="phoneNo">Contact Number</label>
              <input
                type="number"
                id="phoneNo"
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </LableAndInput>
            <LableAndInput>
              <label for="message">Message</label>
              <br />
              <br />
              {/* <textarea
                  style={{ width: "500px", resize: "none" }}
                  type="text"
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                /> */}
              {/* <div class="form-floating"> */}
              <textarea
                class="form-control"
                placeholder="Write message here...."
                id="floatingTextarea"
                row="3"
                style={{ width: "500px" }}
                onChange={(e) => setMessage(e.target.value)}
              />

              {/* </div> */}
            </LableAndInput>

            <ButtonContainer>
              <Button type="submit" onClick={handleSubmit}>
                {/* {state.isLoading?"Sending....":" Send"} */}
                Send
              </Button>
            </ButtonContainer>
          </form>
        </div>
      </div>
    </div>
  );
}
