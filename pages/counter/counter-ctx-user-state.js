import React, { useState, createContext, useContext } from "react";

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useState(0)}>
    {children}
  </CounterContext.Provider>
);

const Container = ({ setCounter }) => (
  <div>
    <AddOneButton setCounter={setCounter} />
  </div>
);

const AddOneButton = () => {
  const [, setCounter] = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter((v) => v + 1)}>Add One</button>
    </div>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <div>Counter: {counter}</div>;
};

export default function CounterUseState() {
  return (
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  );
}
