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
            <Route path="/2020/" exact>
              <Index />
              <About />
              <Schedule />
              <Location />
            </Route>
            <Route path="/2020/about" exact></Route>
            <Route path="/2020/schedule" exact></Route>
            <Route path="/2020/location" exact></Route>
            <Route path="/2020/sponsor" exact>
              <Sponsor />
            </Route>
            <Route path="/2020/organizer" exact>
              <Organizer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
