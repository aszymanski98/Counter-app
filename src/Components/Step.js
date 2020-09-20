import React from "react";
import "../Styles/Step.css";

const Step = (props) => {
  let ref = React.createRef();

  const updateStep = () => {
    props.setStepValue(ref.value);
  };

  return (
    <input
      ref={(data) => {
        ref = data;
      }}
      onChange={updateStep}
      value={props.currentStepValue}
      type="number"
    />
  );
};

export default Step;
