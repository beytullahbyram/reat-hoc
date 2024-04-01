import React, { useState } from "react";

const WithCount = (OriginalComponent) => {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
      setCounter((prev) => prev + 1);
    };

    return (
      <OriginalComponent
        counter={counter}
        incrementCounter={incrementCounter}
      />
    );
  };

  return NewComponent;
};

export default WithCount;
