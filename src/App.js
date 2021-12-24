import Footer from "./component/pages/Footer";
import React from "react";
import Home from "./component/pages/Home";
import { Switch, Redirect } from "react-router-dom";
import { Route } from "react-router";
import Login from "./component/pages/auth/Login";
import Forgotpswd from "./component/pages/auth/Forgotpswd/Forgotpswd";

import Premium from "./component/pages/Quote/quotes_component/premium";

import Claim from "./component/pages/claim";
import { connect } from "react-redux";
import Navbar from "./component/pages/Nav/Navbar";
import styled from "styled-components";
import Registration from "./component/pages/auth/Registration";
import Profile from "./component/pages/profile";
import About from "./component/pages/about";
import Contact from "./component/pages/contactus";
import Reset from "./component/pages/auth/ForgotPassword";
import Form1 from "./component/pages/Quote/quotes_component/Form1";
import YourBusiness from "./component/pages/Quote/quotes_component/your_business";
import PropertiesDetails from "./component/pages/Quote/quotes_component/properties_details";
import StepContext from "./component/pages/Quote/step/StepContext";
const Scroll = styled.div`
  overflow-y: scroll;
  height: 90vh;
  @media (max-width: 850px) {
    height: auto;
  }
`;
function App({ auth }) {
  let isLoggedIn = auth.isLogged;
  const step = React.useContext(StepContext);
  const { changeNext } = step;
  return (
    <div className="App">
      <Navbar />

      <Scroll>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/profile" /> : <Home />}
        </Route>
        {isLoggedIn && (
          <>
            <Route path="/profile">
              <Profile />
            </Route>
          
        <Route exact path="/quote/form1">
          <Form1 changeNext={changeNext} />
          {/* */}
        </Route>

        <Route exact path="/quote/form2">
          <YourBusiness />
        </Route>
        <Route exact path="/quote/form3">
          <PropertiesDetails />
        </Route>
        <Route exact path="/reset_password">
          <Reset />
        </Route>

          </>
        )}

   
       <Route exact path="/claim">
          <Claim />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/registration">
          <Registration />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

      

        <Route exact path="/forgotpassword">
          <Forgotpswd />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

       

       </Switch>


        
      
        <Footer />
      </Scroll>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(App);
