import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, StateType } from "./store/store";

function App() {

  const [val, setval] = useState<number>(0);

  const dispatch = useDispatch();

  const count = useSelector((state: StateType) => state.count);

  const incrementByValueHandler = () => {
    dispatch(incrementByValue(val));
  }

  return (
    <div className="container-fluid">
      <h1 className="text-center">Redux with TS</h1>
      <div className="d-flex flex-column align-items-center">
        <h2>{count}</h2>
        <div className="d-flex column-gap-3">
          <button className="btn btn-primary" onClick={() => { dispatch(increment()) }}>+</button>
          <button className="btn btn-danger" onClick={() => { dispatch(decrement()) }}>-</button>
          <input
            type="number"
            className="from-control"
            onChange={(e) => setval(Number(e.target.value))}
          />
          <button disabled={val < 0} className="btn btn-success" onClick={incrementByValueHandler}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default App