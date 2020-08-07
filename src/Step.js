import React from "react";
import "./Step.css";

function Step(props) {

    let ref = React.createRef();

    const updateStep = () => {
        props.setStepValue(ref.value);
    }

    return (

        <input
            ref={(data) => { ref = data }}
            onChange={updateStep}
            value={props.currentStepValue}
            type="number" />
    );
    
}

export default Step;