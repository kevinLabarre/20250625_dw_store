import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slices/counterSlice";

export const CounterRedux = () => {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  return (
    <>
      <h1>Compteur Redux</h1>
      <p>Compteur : {count}</p>
      <button onClick={incrementCount} className="btn">
        +
      </button>
      <button onClick={() => dispatch(decrement())} className="btn">
        -
      </button>
      <button className="btn" onClick={() => dispatch(incrementByAmount(10))}>
        +10
      </button>
    </>
  );
};
