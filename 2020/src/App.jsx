import React from "react";
import "./App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./containers/Index";
import About from "./containers/About";
import Schedule from "./containers/Schedule";
import Location from "./containers/Location";
import Sponsor from "./containers/Sponsor";
import Organizer from "./containers/Organizer";
import { Events } from "react-scroll";
import "./utils/i18n";
import Application from "./containers/Application";

class App extends React.Component {
  state = {
    showHeader: true
  };
  componentDidMount() {
    this.prev = 10;

    window.addEventListener("scroll", this.handleNavigation);
    Events.scrollEvent.register("begin", this.hideHeader);
    Events.scrollEvent.register("end", this.showHeader);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleNavigation);
  }

  handleNavigation = e => {
    const window = e.currentTarget;
    if (this.prev < window.pageYOffset) {
      this.setState({ showHeader: false });
    } else if (this.prev >= window.pageYOffset) {
      this.setState({ showHeader: true });
    }

    this.prev = window.pageYOffset;
  };

  showHeader = () => {
    this.setState({ showHeader: true });
  };
  hideHeader = () => {
    this.setState({ showHeader: false });
  };

  render() {
    return (
      <Router>
        <div
          style={{
            height: "100vh"
          }}
        >
          {/* <img
            src={process.env.PUBLIC_URL + "/img/bg_star.svg"}
            className={styles.img}
          /> */}
          <Header isShow={this.state.showHeader} />
          <Switch>
            <Route path="/2020/" exact>
              <Index />
              <About />
              <Schedule />
              <Application />
              <Location />
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
