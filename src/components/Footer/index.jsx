import { Container } from "./styles";
import logo from "../../assets/Logo.svg";

export function Footer() {

  return (
    <Container>
      <div>
        <img src={logo} />
        <p>food explorer</p>
      </div>
      <p>&copy; 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
