// Styling Imports
import { Container } from "./styles";

// Strategic Imports
import { useState } from "react";

// Icons Imports
import { FiPlus, FiMinus } from "react-icons/fi";

export function Stepper() {

  // Set the quantity that the user want
  const [quantity, setQuantity] = useState(0);

  // Function to decrease the number of items that the user want to order
  function handleChangeMinus() {
    if (quantity <= 0) {
      return alert("A quantidade não pode ser menor do que 0");
    } else {
      setQuantity(quantity - 1);
    }
  }

  // Function to increase the number of items that the user want to order
  function handleChangePlus() {
    setQuantity(quantity + 1);
  }

  return (
    <Container>
      <button onClick={handleChangeMinus}><FiMinus /></button>
      <p>{quantity}</p>
      <button onClick={handleChangePlus}><FiPlus /></button>
    </Container>
  );
}
