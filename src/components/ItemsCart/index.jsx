// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Section } from "../Section";
import { Button } from "../Button";

// Strategic Imports


export function ItemCarts() {

  const priceTotal = "10,25";
  const quantity = 2;
  const price = 12.29;

  return (
    <Container>
      <Section title="Meu pedido">
        <Content>
          <div className="order">
            <img
              src="http://localhost:3333/files/34d4c6d643b6e09dc303-a.png"
              alt="Foto do prato"
            />

            <div className="info">
              <div>
                <small className="quantity">{quantity} X</small>
                <h2>Coca Cola</h2>
                <span>R$ {price}</span>
              </div>
              <button>Remover dos favoritos</button>
            </div>
          </div>

          <div className="order">
            <img
              src="http://localhost:3333/files/34d4c6d643b6e09dc303-a.png"
              alt="Foto do prato"
            />

            <div className="info">
              <div>
                <small className="quantity">{quantity} X</small>
                <h2>Salada Radish</h2>
                <span>R$ {price}</span>
              </div>
              <button>Remover dos favoritos</button>
            </div>
          </div>

          <div className="order">
            <img
              src="http://localhost:3333/files/34d4c6d643b6e09dc303-a.png"
              alt="Foto do prato"
            />

            <div className="info">
              <div>
                <small className="quantity">{quantity} X</small>
                <h2>Salada Radish</h2>
                <span>R$ {price}</span>
              </div>
              <button>Remover dos favoritos</button>
            </div>
          </div>
        </Content>

        <p>Total: R$ {priceTotal}</p>

        <Button 
          title="Avançar"
        />
      </Section>

    </Container>
  );
}
