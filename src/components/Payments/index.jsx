// Styling Imports
import { Container } from "./styles";

// Components Imports
import { Section } from "../Section";

// Strategic Imports
import { useState } from "react";

// Icons Imports
import { PiCreditCard } from "react-icons/pi";
import { FaPix } from "react-icons/fa6";
import { Button } from "../Button";

export function Payment() {
  const [payment, setPayment] = useState();

  return (
    <Container>
      <Section title="Pagamento">
        <div className="card-payments">
          <button className="pix">
            <FaPix />
            Pix
          </button>

          <button className="card">
            <PiCreditCard />
            Crédito
          </button>
        </div>

        <div className="payment-methods">
          
        </div>
      </Section>
    </Container>
  );
}
