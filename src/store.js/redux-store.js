import { createStore } from "redux";

const defaultStore = {
  counter: 0,
  show: true,
};

const reducerFunction = (state = defaultStore, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, show: state.show };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1, show: state.show };
  }

  if (action.type === "increase") {
    return { counter: state.counter + action.amount, show: state.show };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      show: !state.show,
    };
  }

  return defaultStore;
};

const reduxStore = createStore(reducerFunction);

export default reduxStore;
