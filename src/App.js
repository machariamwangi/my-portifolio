import React, { Component } from "react";
import PageWrapper from "./Components/PageWrapper";
import Home from "./Components/Pages/Home";

class App extends Component {
  render() {
    return (
      <div>
        <PageWrapper>
          <Home />
        </PageWrapper>
      </div>
    );
  }
}
export default App;
