// Styling Imports
import { Container } from "./styles";

// Icons Imports
import { FiSearch } from "react-icons/fi";

export function InputSearch({ icon: Icon, title, ...rest }) {

  return (
    <Container>
      {Icon && <FiSearch size={24} />}
      <input {...rest}>{title}</input>
    </Container>
  );
}
