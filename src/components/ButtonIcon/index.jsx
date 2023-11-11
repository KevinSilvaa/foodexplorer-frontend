import { Container } from "./styles";
import { PiReceipt } from "react-icons/pi"

export function ButtonIcon({ quantity, title, order = false, ...rest }) {

  return (
    <Container
      type="button"
      {...rest}
    >
      <PiReceipt size={32} />
      {title} {order ? `(${quantity})` : `${quantity}`}
    </Container>
  );
}
