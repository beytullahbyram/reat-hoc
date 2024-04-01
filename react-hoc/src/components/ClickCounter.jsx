import React from "react";
import  WithCount from "./WithCount";

const ClickCounter = (props) => {
  const { counter, incrementCounter } = props;

  return (
    <div>
      <button onClick={incrementCounter}>Click button</button>
      <p>Counter: {counter}</p>
    </div>
  );
};
export default WithCount(ClickCounter);
