import * as React from "react";

interface IProps {
  count: number;
  onIncrement: () => any;
  onDecrement: () => any;
}

const App: React.SFC<IProps> = props => {
  const { count, onIncrement, onDecrement } = props;
  return (
    <div>
      <p>{count}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </p>
    </div>
  );
};

export default App;
