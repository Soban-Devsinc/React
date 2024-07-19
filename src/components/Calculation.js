import { useState, useEffect } from "react";

function Calculation() {
const [count, setCount] = useState(0)
const [fakecount, setFakecount] = useState(0)


useEffect(() => {
  setFakecount(fakecount + 2)
}, [count])

  return(
    <>
      <h1>Count: {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>Calculate</button>
      <h1>Fake Count: {fakecount}</h1>
    </>
  );
}

export default Calculation;
