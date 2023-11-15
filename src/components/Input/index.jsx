// Styling Imports
import { Container, Field } from "./styles";

export function Input({ icon: Icon, title, id, ...rest }) {

  return (
    <Container>
      <label htmlFor={id}>{title}</label>

      <Field className="field">
        {Icon && <Icon size={24} />}
        <input id={id} {...rest} />
      </Field>
    </Container>
  );
}
