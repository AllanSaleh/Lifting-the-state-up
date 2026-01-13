import { useState } from "react"

const PetForm = (props) => {

  const [petInput, setPetInput] = useState("");

  const handleInput = event => {
    setPetInput(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.setPetSubmitted(petInput);
    setPetInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Pet Name"
        onChange={handleInput}
        value={petInput} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PetForm