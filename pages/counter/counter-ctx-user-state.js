import React, { useState } from "react";

const Container = ({ setCounter }) => (
  <div>
    <AddOneButton setCounter={setCounter} />
  </div>
);

const AddOneButton = ({ setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter((v) => v + 1)}>Add One</button>
    </div>
  );
};

const Counter = ({ counter }) => <div>Counter: {counter}</div>;

export default function CounterUseState() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Container setCounter={setCounter} />
      <Counter counter={counter} />
    </div>
  );
}
