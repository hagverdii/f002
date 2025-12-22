import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../stores/features/counter/counterSlice";
import { useState } from "react";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h2>Count: {count}</h2>

      <div style={{ marginBottom: 10 }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div>
        <input
          type='text'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: 60, marginRight: 8 }}
        />

        <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
        <button onClick={() => dispatch(decrementByAmount(amount))}>Decrement by Amount</button>
      </div>
    </div>
  );
}
