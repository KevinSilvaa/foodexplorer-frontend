// Styling Imports
import { Container } from "./styles";

// Icons Imports
import { FiSearch } from "react-icons/fi";

export function InputSearch({ icon: Icon, title, onClick, ...rest }) {

  return (
    <Container>
      {Icon && <button onClick={onClick}><FiSearch size={24} /></button>}
      <input {...rest}>{title}</input>
    </Container>
  );
}
