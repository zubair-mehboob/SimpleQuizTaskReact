import React, { Component } from "react";

class Quiz extends Component {
  state = {
    ques: "",
    btnCount: 0,
    resetBtn: false
  };
  static getDerivedStateFromProps(props, state) {
    if (props.resetBtn) {
      return {
        btnCount: 0,
        ques: props.js[state.btnCount],
        resetBtn: false
      };
    } else if (state.btnCount < props.js.length) {
      return {
        ques: props.js[state.btnCount],
        btnCount: state.btnCount + 1,
        resetBtn: props.resetBtn
      };
    }
    return null;
  }
  render() {
    console.log(this.state.btnCount);
    return (
      <div className="wrapper">
        <p className="ques">
          {this.state.btnCount == 1
            ? this.state.ques
            : this.state.btnCount == 0
            ? "Quiz Restarted"
            : `${this.state.btnCount - 1} : ${this.state.ques}`}
        </p>
        {/* <p className="ques">{this.state.ques}</p> */}
        <div className="box">
          <button onClick={this.props.next} className="btn">
            Next
          </button>

          <button onClick={this.props.resetFunc} className="btn">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Quiz;
