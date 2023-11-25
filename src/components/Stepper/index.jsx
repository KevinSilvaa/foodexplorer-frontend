// Styling Imports
import { Container } from "./styles";

// Icons Imports
import { FiPlus, FiMinus } from "react-icons/fi";

export function Stepper({ quantity, setQuantity }) {

  // Function to decrease the number of items that the user want to order
  function handleDecrement() {
    if (quantity <= 1) {
      return alert("A quantidade não pode ser menor do que 1");
    } else {
      setQuantity(prevState => --prevState);
    }
  }

  // Function to increase the number of items that the user want to order
  function handleIncrement() {
    setQuantity(prevState => ++prevState);
  }

  return (
    <Container>
      <button onClick={handleDecrement}><FiMinus /></button>
      <p>{quantity}</p>
      <button onClick={handleIncrement}><FiPlus /></button>
    </Container>
  );
}
