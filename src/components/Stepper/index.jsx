import { Container } from "./styles";
import { FiPlus, FiMinus } from "react-icons/fi"

export function Stepper({ onClick }) {

  return (
    <Container>
      <button onClick={onClick}><FiMinus /></button>
      <p>1</p>
      <button onClick={onClick}><FiPlus /></button>
    </Container>
  );
}
