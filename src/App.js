import React, { Component } from "react";
import ReactDom from "react-dom";
import "./App.css";
import Quiz from "./Quiz";

class App extends Component {
  state = {
    html: [
      "Welcome in HTML Quiz",
      "What does HTML stands for?",
      "What does dd tag do?",
      "What does tr tag do?"
    ],
    js: [
      "Welcome in JavaScript Quiz",
      "define js",
      "why do we use js",
      "Is JS a front end language or backend or both?",
      "What is ES6",
      "Is ES6 support OOPs",
      "Is it true that React uses JS"
    ],
    resetBtn: false
  };

  handleClick = () => {
    this.setState({
      js: this.state.js,
      resetBtn: false
    });
  };
  handleClickReset = () => {
    this.setState({
      js: this.state.js,
      resetBtn: true
    });
  };
  render() {
    return (
      <div>
        <Quiz
          js={this.state.js}
          resetBtn={this.state.resetBtn}
          next={this.handleClick}
          resetFunc={this.handleClickReset}
        />
      </div>
    );
  }
}
export default App;
