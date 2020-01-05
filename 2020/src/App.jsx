import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./containers/Index";
import About from "./containers/About";
import Schedule from "./containers/Schedule";
import Location from "./containers/Location";
import Sponsor from "./containers/Sponsor";
import Organizer from "./containers/Organizer";
import ComingSoon from "./components/ComingSoon";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div
          style={{
            height: "100vh"
          }}
        >
          <Header />
          <Switch>
            <Route path="/" exact>
              <Index />
              <ComingSoon />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/schedule" exact>
              <Schedule />
            </Route>
            <Route path="/location" exact>
              <Location />
            </Route>
            <Route path="/sponsor" exact>
              <Sponsor />
            </Route>
            <Route path="/organizer" exact>
              <Organizer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
