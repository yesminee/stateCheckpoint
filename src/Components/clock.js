import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }
  render() {
    return (
      <p style={{ fontSize: "18px", textShadow: "2px 2px 5px #d166ae", fontWeight:"500" }}>
        Today is {this.state.time}. <br /> Have a nice day !
      </p>
    );
  }
}
export default Clock;
