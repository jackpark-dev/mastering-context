import React, { useReducer, createContext, useContext } from "react";

const CounterContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    default:
      return state;
  }
};

const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useReducer(reducer, 0)}>
    {children}
  </CounterContext.Provider>
);

const Container = ({ setCounter }) => (
  <div>
    <AddOneButton setCounter={setCounter} />
  </div>
);

const AddOneButton = () => {
  const [, dispatch] = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "add",
          })
        }
      >
        Add One
      </button>
    </div>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <div>Counter: {counter}</div>;
};

function CounterUseState() {
  return (
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  );
}

export default function CounterUserContextPage() {
  return (
    <div>
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
    </div>
  );
}
