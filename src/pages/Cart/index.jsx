// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Payment } from "../../components/Payments";
import { Header } from "../../components/Header";
import { ItemCarts } from "../../components/ItemsCart";
import { Footer } from "../../components/Footer";

// Strategic Imports


export function Cart() {

  return (
    <Container>
      <Header />

      <Content>
        <div id="item-carts">
          <ItemCarts />
        </div>

        <div id="payment" className="disabled">
          <Payment />
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
