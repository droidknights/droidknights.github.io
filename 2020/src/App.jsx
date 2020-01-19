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
      console.log("scrolling down");
      this.setState({ showHeader: false });
    } else if (this.prev >= window.pageYOffset) {
      console.log("scrolling up");
      this.setState({ showHeader: true });
    }

    this.prev = window.pageYOffset;
  };

  showHeader = () => {
    console.log("show");
    this.setState({ showHeader: true });
  };
  hideHeader = () => {
    console.log("hide");
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
