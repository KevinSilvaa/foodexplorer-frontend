// Styling Imports
import { Container, Field } from "./styles";

export function InputFile({ icon: Icon, title, id, text, ...rest}) {

  return (
    <Container>
      <label htmlFor={id}>
        {title}
        
        <Field>
          {Icon && <Icon size={24} />}
          <input id={id} {...rest} type="file" name="image" />
          <p>{text}</p>
        </Field>
      </label>
    </Container>
  );
}
