// Styling Imports
import { Container } from "./styles";

export function Button({ title, loading = false, icon: Icon, ...rest }) {

  return (
    <Container
      className="button"
      type="button"
      disabled={loading}
      {...rest}
    >
      {Icon && <Icon size={24} />} { loading ? "Carregando..." : title }
    </Container>
  );
}
