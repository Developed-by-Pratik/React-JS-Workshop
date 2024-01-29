import React, { useState } from "react";

function StateOfFunctionalComponent() {
  const [count, setCount] = useState(0);
  const IncrementCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>State Of Functional Component</h1>
      <h1>{count}</h1>
      <button onClick={IncrementCounter}>Increment</button>
    </div>
  );
}

export default StateOfFunctionalComponent;
