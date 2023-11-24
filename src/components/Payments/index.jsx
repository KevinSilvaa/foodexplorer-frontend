// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Section } from "../Section";

// Strategic Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons Imports
import { PiCreditCard } from "react-icons/pi";
import { FaPix } from "react-icons/fa6";
import { Button } from "../Button";
import { Input } from "../Input";

// Image Imports
import qrCode from "../../assets/qrcode.svg";
import clockPhoto from "../../assets/clock.svg";
import checkCircle from "../../assets/check-circle.svg";
import forkKnife from "../../assets/fork-knife.svg";

export function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [visible, setVisible] = useState(true);
  const [clockVisible, setClockVisible] = useState(false);
  const [checkVisible, setCheckVisible] = useState(false);
  const [concludedVisible, setConcludedVisible] = useState(false);

  const [card, setCard] = useState("");
  const [validity, setValidity] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const navigate = useNavigate();

  function handlePix() {
    setPaymentMethod("Pix");
  }

  function handleCard() {
    setPaymentMethod("Card");
  }

  function clockActive() {
    setVisible(false);
    setClockVisible(true);

    setTimeout(() => {
      checkActive();
    }, 3000);
  }

  function checkActive() {
    setClockVisible(false);
    setCheckVisible(true);

    setTimeout(() => {
      concludedActive();
    }, 3000);
  }

  function concludedActive() {
    setCheckVisible(false);
    setConcludedVisible(true);

    setTimeout(() => {
      navigate("/");
      alert("Pedido realizado com sucesso!");
    }, 3000);
  }

  async function handlePaymentProgress() {
    if (!card || !validity || !securityCode) {
      return alert("Preencha todos os campos corretamente");
    }

    clockActive();
  }

  return (
    <Container>
      <Section title="Pagamento">

        {
          visible &&
          <Content>
            <div className="card-payments">
              <Button
                className="pix"
                icon={FaPix}
                title="Pix"
                onClick={handlePix}
              />

              <Button
                className="card"
                icon={PiCreditCard}
                title="Crédito"
                onClick={handleCard}
              />
            </div>

            {
              paymentMethod ?
                <div className="payment-methods">
                  {
                    paymentMethod === "Pix" ?
                      <div className="img">
                        <img
                          src={qrCode}
                          alt="Qr code para o pagamento via pix"
                        />
                      </div>

                      :

                      <div className="card-info">
                        <Input
                          title="Número do cartão"
                          placeholder="0000 0000 0000 0000"
                          type="number"
                          onChange={e => setCard(e.target.value)}
                        />

                        <div className="field-2">
                          <Input
                            title="Validade"
                            placeholder="04/25"
                            type="text"
                            onChange={e => setValidity(e.target.value)}
                          />

                          <Input
                            title="CVC"
                            placeholder="000"
                            type="number"
                            onChange={e => setSecurityCode(e.target.value)}
                          />
                        </div>

                        <Button
                          title="Finalizar pagamento"
                          onClick={handlePaymentProgress}
                        />

                      </div>
                  }
                </div>
                :

                <span>Selecione o método de pagamento</span>
            }
          </Content>
        }

        {
          clockVisible &&
          <Content>
            <div className="card-payments">
              <Button
                className="pix"
                icon={FaPix}
                title="Pix"
                disabled={true}
              />

              <Button
                className="card"
                icon={PiCreditCard}
                title="Crédito"
                disabled={true}
              />
            </div>
            <div className="payment-methods">
              <div className="payment-process">
                <img
                  src={clockPhoto}
                  alt="Imagem de um relógio"
                />
                <p>Aguardando pagamento no caixa</p>
              </div>
            </div>
          </Content>
        }

        {
          checkVisible &&
          <Content>
            <div className="card-payments">
              <Button
                className="pix"
                icon={FaPix}
                title="Pix"
                disabled={true}
              />

              <Button
                className="card"
                icon={PiCreditCard}
                title="Crédito"
                disabled={true}
              />
            </div>
            <div className="payment-methods">
              <div className="payment-process">
                <img
                  src={checkCircle}
                  alt="Imagem de um check"
                />
                <p>Pagamento aprovado!</p>
              </div>
            </div>
          </Content>
        }

        {
          concludedVisible &&
          <Content>
            <div className="card-payments">
              <Button
                className="pix"
                icon={FaPix}
                title="Pix"
                disabled={true}
              />

              <Button
                className="card"
                icon={PiCreditCard}
                title="Crédito"
                disabled={true}
              />
            </div>
            <div className="payment-methods">
              <div className="payment-process">
                <img
                  src={forkKnife}
                  alt="Imagem de um garfo e faco"
                />
                <p>Pedido registrado!</p>
              </div>
            </div>
          </Content>
        }

      </Section>
    </Container>
  );
}
