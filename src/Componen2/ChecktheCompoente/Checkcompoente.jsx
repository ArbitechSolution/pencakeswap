import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "../ChecktheCompoente/Card";

import "./Check.css";

export class Checkhere extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      colorStyle: "color-1"
    };
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn() {
    this.setState({ hover: true });
  }

  hoverOff() {
    this.setState({ hover: false });
  }

  render() {
    return (
      <div>
        <div
          className={this.state.colorStyle}
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
        >
          <Card name={this.state.hover ? "hover-on" : "hover-off"} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Checkhere />, rootElement);
