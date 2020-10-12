import React from "react";
import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Clock from "./Components/clock";
import Main from "./Components/main";


export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Clock />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
