// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Payment } from "../../components/Payments";
import { Header } from "../../components/Header";
import { ItemCarts } from "../../components/ItemsCart";
import { Footer } from "../../components/Footer";

// Strategic Imports


export function Cart() {

  function handlePayment() {
    document.getElementById("item-carts").style.display = "none";
    document.getElementById("payment").style.display = "block";
  }

  return (
    <Container>
      <Header />

      <Content>
        <div id="item-carts">
          <ItemCarts />

          <button className="button-payment" onClick={handlePayment}>
            Avançar
          </button>
        </div>

        <div id="payment" className="disabled">
          <Payment />
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
