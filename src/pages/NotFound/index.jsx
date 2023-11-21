// Styling Imports
import { Container } from "./styles";

// Strategic Imports
import { Link } from "react-router-dom";

export function NotFound() {

  return (
    <Container>
      <div>
        <h1>Ops! Página não encontrada ou indisponível</h1>
        <Link to="/">Voltar para o início</Link>
      </div>
    </Container>
  );
}
