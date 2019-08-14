import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";

//re-usable components
import Services from "../Common/Services";
import Portifolio from "../Common/Portifolio";
import Team from "../Common/Team";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Studio!"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="TELL ME MORE"
          link="/services"
          showButton={true}
          image={image}
        />
        <Services />
        <Portifolio />
        <Team />
        <Contact />
      </div>
    );
  }
}

export default Home;
