import React, { Component } from "react";
import TeamItem from "./TeamItem";
import img1 from "../assets/img/team/1.jpg";
import img2 from "../assets/img/team/2.jpg";
import img3 from "../assets/img/team/3.jpg";

const team = [
  {
    title: "Kay Garland",
    subtitle: "Lead Designer",
    image: img1,
    icon1: "fab fa-twitter",
    icon2: "fab fa-facebook-f",
    icon3: "fab fa-linkedin-in"
  },
  {
    title: "Larry Parker",
    subtitle: "Lead marketer",
    image: img2,
    icon1: "fab fa-twitter",
    icon2: "fab fa-facebook-f",
    icon3: "fab fa-linkedin-in"
  },
  {
    title: "Diana Pertersen",
    subtitle: "Lead Developer",
    image: img3,
    icon1: "fab fa-twitter",
    icon2: "fab fa-facebook-f",
    icon3: "fab fa-linkedin-in"
  }
];

class Team extends Component {
  render() {
    return (
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            {team.map((item, index) => {
              return <TeamItem {...item} key={index} />;
            })}
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Team;
