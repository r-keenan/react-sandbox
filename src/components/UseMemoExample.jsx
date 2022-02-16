import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoHook() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  //const sqrt = getSqrt(number);
  //This uses caching to save on expensive functions when the input(s) do not change.
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />
      <h2 className="my-3">
        The square root of {number} is {sqrt}{" "}
      </h2>
      <button onClick={onClick} className="btn btn-primary">
        ReRender:{" "}
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  console.log("Expensive Function Called");
  return Math.sqrt(n);
}

export default UseMemoHook;
