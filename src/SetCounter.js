import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { decrement, increment, set } from "./actions";

const SetCounter = () => {
  const countFromStore = useSelector((state) => state.count);
  const [count, setCount] = useState(countFromStore);
  const dispatch = useDispatch();

  const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  useEffect(() => {
    setCount(countFromStore);
  }, [countFromStore]);

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          actions.set(count);
        }}
      >
        <label htmlFor="set-to">Set Counts</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default SetCounter;
