// Styling Imports
import { Container } from "./styles";

// Strategic Imports
import { useNavigate } from "react-router-dom";

// Icons Imports
import { FiArrowLeft } from "react-icons/fi";

export function ButtonText() {

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container onClick={handleBack}>
      <FiArrowLeft size={32} />
      Voltar
    </Container>
  );
}
