import { useState } from "react";

function ColourPicker () {

  const [colour, setColour] = useState("Red")
  return(
    <>
      <h1>The colour is {colour}</h1>
      <button type="button" onClick={() => setColour("Blue")}>Blue</button>
      <button type="button" onClick={() => setColour("Green")}>Green</button>
      <button type="button" onClick={() => setColour("Yellow")}>Yellow</button>
      <button type="button" onClick={() => setColour("Red")}>Red</button>
    </>

  )
}

export default ColourPicker;
