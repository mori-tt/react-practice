import { useMemo, useState, useCallback, useEffect, useRef } from "react";
import Note from "./Note";

function Counter({ children }) {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);

  const now = useMemo(() => {
    return Date.now();
  }, []);

  // countが偶数か奇数かを判定する処理をメモ化
  const isEven = useMemo(() => {
    console.log("isEven計算中...");
    return count % 2 === 0;
  }, [count]);

  const handleClick = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );

  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <div className="card">
      <button
        onClick={() => setCount((count) => count + 1)}
        className="btn btn-primary"
      >
        count is {count}
      </button>
      <button type="button" onClick={() => setRandom}></button>
      <p>Message {count}</p>
      <p>{isEven ? "偶数" : "奇数"}</p>
      <Note now={now} handleClick={handleClick} />
      {children}
    </div>
  );
}

export default Counter;
