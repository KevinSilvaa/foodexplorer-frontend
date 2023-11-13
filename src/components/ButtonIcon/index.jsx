// Styling Imports
import { Container } from "./styles";

// Icons Imports
import { PiReceipt } from "react-icons/pi"

export function ButtonIcon({ quantity, icon: Icon, title, order = false, ...rest }) {

  return (
    <Container
      type="button"
      {...rest}
    >
      {Icon ? <PiReceipt size={32} /> : ""}
      {title} {order ? `(${quantity})` : ""}
    </Container>
  );
}
