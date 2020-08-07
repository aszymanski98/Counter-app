import React, { Component } from "react";
import "./Counter.css";

import Step from './Step';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            stepValue: 1,
        }
    }
    changeValue = () => {
        this.setState((prevState) => {
            return ({
                counterValue: prevState.counterValue + this.state.stepValue
            })
        });
    }

    resetValue = () => {
        this.setState({ counterValue: 0 })
    }

    reInit = () => {
        this.setState({ counterValue: this.props.initValue })
    }

    setStep = (newStepValue) => {
        this.setState({ stepValue: Number(newStepValue) })
    }

    render() {
        return (
            <div className="counter">
                Counter:
                <span className="value">{this.state.counterValue}</span>

                <div className="buttons-pannel">
                    <button onClick={this.changeValue}>
                        Add {this.state.stepValue}
                    </button>

                    <button onClick={this.resetValue}>
                        Reset
                </button>

                    <button onClick={this.reInit}>
                        ReInit
                </button>

                    <Step setStepValue={this.setStep} currentStepValue={this.state.stepValue} />
                </div>
            </div>
        )
    }
}

/* function Counter(props) {

    let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

    return (
    <div className='counter'>
        Counter:
        <span className='value'>
            {props.initValue}
        </span>
    </div>
    );    
} */

export default Counter;