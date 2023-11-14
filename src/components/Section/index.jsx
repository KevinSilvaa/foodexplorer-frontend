// Styling Imports
import { Container } from "./styles";

export function Section({ children, title }) {

  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
}
