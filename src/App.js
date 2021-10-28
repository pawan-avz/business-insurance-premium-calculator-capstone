import "./App.css";
import Footer from "./component/pages/Footer";
import Nav from "./component/pages/Nav";
import Home from "./component/pages/Home";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import Login from "./component/pages/Login";
import Policies from "./component/pages/Policies";
import Quotes from "./component/pages/Quotes";
import Premium from "./component/pages/Premium";
import Registration from "./component/pages/Registration";
import Claim from "./component/pages/Claim";

function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/premium">
        <Premium />
      </Route>
      <Route path="/quote">
        <Quotes />
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

      <Footer />
    </div>
  );
}

export default App;
