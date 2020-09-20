import React, { Component } from "react";
import "../Styles/Counter.css";

import Step from "./Step";

class Counter extends Component {
  constructor(props) {
    super(props);

    let level = 1;
    let toLevel = 10;

    while (toLevel <= props.initValue) {
      toLevel *= 2;
      level++;
    }

    this.state = {
      counterValue: this.props.initValue,
      level: level,
      toNextLevel: toLevel - props.initValue,
      stepValue: 1,
      nextLevel: toLevel,
    };
  }

  changeValue = () => {
    this.setState((prevState) => {
      let tmpToNextLevel = prevState.toNextLevel - this.state.stepValue;

      let newState = {
        counterValue: prevState.counterValue + prevState.stepValue,
        nextLevel: prevState.nextLevel,
      };
      if (tmpToNextLevel <= 0) {
        newState.nextLevel *= 2;
        newState.toNextLevel = newState.nextLevel - (prevState.counterValue + prevState.stepValue);
        newState.level = prevState.level + 1;
      } else {
        newState.toNextLevel = tmpToNextLevel;
      }

      while (newState.nextLevel <= newState.counterValue) {
        newState.nextLevel *= 2;
        newState.toNextLevel = newState.nextLevel - (prevState.counterValue + prevState.stepValue);
        newState.level++;
      }
      return newState;
    });
  };

  resetValue = () => {
    this.setStep(0);
    this.setState({
      counterValue: 0,
      level: 1,
      toNextLevel: 10,
      nextLevel: 10,
    });
  };

  reInit = () => {
    let level = 1;
    let toLevel = 10;

    while (toLevel <= this.props.initValue) {
      toLevel *= 2;
      level++;
    }

    this.setState({
      counterValue: this.props.initValue,
      level: level,
      toNextLevel: toLevel - this.props.initValue,
      nextLevel: toLevel,
    });
  };

  setStep = (newStepValue) => {
    this.setState({ stepValue: Number(newStepValue) });
  };

  render() {
    return (
      <div className="counter">
        <p>
          <i>Counter:</i>
          <span className="value">{this.state.counterValue}</span>
        </p>

        <p>
          <i>Level:</i>
          <span className="level">{this.state.level}</span>
        </p>

        <p>
          <i>Left to next level:</i>
          <span className="level">{this.state.toNextLevel}</span>
        </p>

        <div className="buttons-pannel">
          <button onClick={this.changeValue}>Add {this.state.stepValue}</button>

          <button onClick={this.resetValue}>Reset</button>

          <button onClick={this.reInit}>ReInit</button>

          <Step setStepValue={this.setStep} currentStepValue={this.state.stepValue} />
        </div>
      </div>
    );
  }
}

export default Counter;
