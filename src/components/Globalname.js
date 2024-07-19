import { useState, createContext, useContext } from "react";

const UserContext = createContext()

function Globalname () {
  const [name, setName] = useState("Soban")
  return (
    <UserContext.Provider value={name}>
      <h1>Function 1: {name}</h1>
      <Globalname2 name={name}/>
    </UserContext.Provider>
  );
}

function Globalname2 () {
  const name = useContext(UserContext)
  return (
    <>
      <h1>Function 2: {name}</h1>
    </>
  );
}


export default Globalname;
