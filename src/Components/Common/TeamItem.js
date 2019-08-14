/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class TeamItem extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="team-member">
          <img
            className="mx-auto rounded-circle"
            src={this.props.image}
            alt=""
          />
          <h4>{this.props.title}</h4>
          <p className="text-muted">{this.props.subtitle}</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#">
                <i className={this.props.icon1} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className={this.props.icon2} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className={this.props.icon3} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default TeamItem;
