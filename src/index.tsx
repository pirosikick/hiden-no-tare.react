import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import {
  createStore,
  Dispatch as ReduxDispatch
  // Reducer as ReduxReducer
} from "redux";
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

type Dispatch = ReduxDispatch<Action>;
// type Reducer = ReduxReducer<IRootState, Action>;

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

const mapStateToProps = (state: IRootState) => ({
  count: state.count
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement())
});
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
