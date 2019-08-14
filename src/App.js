import React, { Component } from "react";
import PageWrapper from "./Components/PageWrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//pages
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Services from "./Components/Common/Services";
import Portifolio from "./Components/Common/Portifolio";
import Team from "./Components/Common/Team";
import Contact from "./Components/Pages/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <PageWrapper>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Services" component={Services} />
            <Route path="/Portifolio" component={Portifolio} />
            <Route path="/Team" component={Team} />
            <Route path="/Contact" component={Contact} />
          </PageWrapper>
        </Router>
      </div>
    );
  }
}
export default App;
