import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { set } from "./actions";

const SetCounter = () => {
  const countFromStore = useSelector((state) => state.count);
  const [count, setCount] = useState(countFromStore);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(countFromStore);
  }, [countFromStore]);

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(set(count));
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
