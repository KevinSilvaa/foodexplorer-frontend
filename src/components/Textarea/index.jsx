// Styling Imports
import { Container, Field } from "./styles";

export function Textarea({ title, id, ...rest }) {

  return (
    <Container>
      <label htmlFor={id}>{title}</label>

      <Field {...rest}>

      </Field>
    </Container>
  );
}
