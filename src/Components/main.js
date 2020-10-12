import React from "react";
//import "./App.css";
//import Header from "./Components/header";
//import Footer from "./Components/footer";
//import Clock from "./Components/clock";
import src from "../images/moi.png";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      fullName: "Yesmine Makkes",
      bio: "This is my bio",
      imgSrc: src,
    };
  }
  showfn = this.showfn.bind(this);

  showfn() {
    let { show } = this.state.show;
    this.setState({
      show: !show,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.showfn}>clickMe</button>
        {this.state.show ? (
          <div>
            <img src={this.state.imgSrc} alt="me" />
            <div>{this.state.fullName}</div>
            <div>{this.state.bio}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Main;
