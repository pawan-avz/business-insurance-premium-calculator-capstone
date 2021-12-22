import Footer from "./component/pages/Footer";

import Home from "./component/pages/Home";
import { Switch, Redirect } from "react-router-dom";
import { Route } from "react-router";
import Login from "./component/pages/auth/Login";
import Forgotpswd from "./component/pages/auth/Forgotpswd/Forgotpswd";
import Policies from "./component/pages/Policies";
import Quote from "./component/pages/Quote";
import Premium from "./component/pages/Premium";
import StepProvider from "./component/pages/Quote/step/StepProvider";
// import Registration from "./component/pages/Registration";
import Claim from "./component/pages/claim";
import { connect } from "react-redux";
import Navbar from "./component/pages/Nav/Navbar";
import styled from "styled-components";
import Registration from "./component/pages/auth/Registration";
import Profile from "./component/pages/profile"
import Dashboard from "./component/pages/dashboard/index";

import Reset from "./component/pages/auth/ForgotPassword";
const Scroll = styled.div`
  overflow-y: scroll;
  height: 90vh;
  @media (max-width: 850px) {
    height: auto;
  }
`;
function App({ auth }) {
  let isLoggedIn = auth.isLogged;

  return (
    <div className="App">
      <Navbar />
      <Scroll>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Home />}
        </Route>
        {isLoggedIn && (
          <>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </>
        )}

        <Route exact path="/premium">
          <Premium />
        </Route>
        <Route path="/quote">
          <StepProvider>
            <Quote />
          </StepProvider>
        </Route>

     
        <Route exact path="/claim">
          <Claim />
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>

        <Route exact path="/registration">
          <Registration />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/reset_password">
          <Reset />
        </Route>

        <Route exact path="/forgotpassword">
          <Forgotpswd />
        </Route>
        <Redirect to="/" />
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
