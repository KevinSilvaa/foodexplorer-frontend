// Styling Imports
import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) {

  return (
    <Container>
      {Icon ? <Icon size={24} /> : ""}
      <input type="text" {...rest} />
    </Container>
  );
}
