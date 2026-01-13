import Home from "./pages/Home"
import PetForm from "./components/PetForm"
import PetDisplay from "./components/PetDisplay";
import { useState } from "react";

function App() {

  const [petSubmitted, setPetSubmitted] = useState("");

  return (
    <>
      {/* <Home /> */}
      <PetForm setPetSubmitted={setPetSubmitted} />
      <PetDisplay petSubmitted={petSubmitted} />
    </>
  )
}

export default App
