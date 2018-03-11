import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { createAction, getType } from "typesafe-actions";
import { $call } from "utility-types";
import App from "./App";

interface IRootState {
  count: number;
}

const actions = {
  decrement: createAction("DECREMENT"),
  increment: createAction("INCREMENT")
};
const returnsOfActions = Object.values(actions).map($call);
type Action = typeof returnsOfActions[number];

const initialState: IRootState = { count: 0 };
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case getType(actions.increment):
      return { ...state, count: state.count + 1 };
    case getType(actions.decrement):
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
const store = createStore(reducer);
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
// tslint:disable-next-line no-console
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
