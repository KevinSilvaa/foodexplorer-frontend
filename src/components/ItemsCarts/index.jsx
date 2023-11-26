// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Section } from "../Section";
import { useState, useEffect } from "react";

// Strategic Imports
import { api } from "../../services/api";

export function ItemsCarts() {

  const [userCart, setUserCart] = useState([]);
  const [finalPrice, setFinalPrice] = useState("");

  async function handleRemoveItem(id) {
    await api.delete(`/requests/${id}`)
    .then(alert("Prato excluído do carrinho de compras com sucesso!"))
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível remover prato do carrinho de compras.")
      }
    })
  }

  useEffect(() => {
    async function handleCart() {
      const response = await api.get("/requests");
      
      setUserCart(response.data);
    }
    
    handleCart();
  }, [userCart])
  
  useEffect(() => {
    async function totalAmountToPay() {
      const auxPrice = userCart.map(value => value.quantity * value.price.replace(",", "."));
      const totalPrice = auxPrice.reduce((acc, current) => acc + current, 0);

      setFinalPrice(totalPrice);
    }

    totalAmountToPay();
  }, [userCart])

  return (
    <Container>
      <Section title="Meu pedido">
        <Content>
          {userCart &&
            userCart.map(item => (
              <div className="order" key={String(item.id)}>
                <img
                  src={`${api.defaults.baseURL}/files/${item.image}`}
                  alt="Foto do prato"
                />

                <div className="info">
                  <div>
                    <small className="quantity">{item.quantity} X</small>
                    <h2>{item.dish_name}</h2>
                    <span>R$ {item.price}</span>
                  </div>
                  <button onClick={() => handleRemoveItem(item.id)}>Remover do carrinho de compras</button>
                </div>
              </div>
            ))
          }

        </Content>

        <p> Total: R$ {
          (finalPrice)
            .toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
        }</p>

      </Section>

    </Container>
  );
}
