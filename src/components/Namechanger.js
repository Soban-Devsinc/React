import { useState } from "react";

function Namechanger() {
  const [name, setName] = useState('')
  return(
    <>
      <input value={name} onChange={e => setName(e.target.value)} ></input>
      <p>Hello, I'm {name}!</p>
    </>
  )
}
export default Namechanger;
