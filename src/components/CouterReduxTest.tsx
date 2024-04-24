import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { clickChange, decrement, increment, incrementByAmount } from "../features/counter/counterSlice";

const CouterReduxTest = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const status = useSelector((state: RootState) => state.counter.status);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <span>{status}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="m-5 bg-primary rounded-lg p-3"
          aria-label="Decrement value"
          onClick={() => dispatch(clickChange())}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  );
};

export default CouterReduxTest;
