import React, { Component } from "react";
import PageWrapper from "./Components/PageWrapper";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <PageWrapper>
            <Route path="/" component={Home} />
          </PageWrapper>
        </Router>
      </div>
    );
  }
}
export default App;
