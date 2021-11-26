import Footer from "./component/pages/Footer";

import Home from "./component/pages/Home";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import Login from "./component/pages/auth/Login";
import Forgotpswd from "./component/pages/auth/Forgotpswd/Forgotpswd";
import Policies from "./component/pages/Policies";
import Quote from "./component/pages/Quote";
import Premium from "./component/pages/Premium";
import StepProvider from "./component/pages/Quote/step/StepProvider";
// import Registration from "./component/pages/Registration";
import Claim from "./component/pages/Claim";

import Navbar from "./component/pages/Nav/Navbar";

import Registration from "./component/pages/auth/Registration";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>
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

      <Route exact path="/registration">
        <Registration />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/forgotpassword">
        <Forgotpswd />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
