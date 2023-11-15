// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Ingredient } from "../../components/Ingredient";
import { Stepper } from "../../components/Stepper";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

// Strategic Imports
import { useNavigate } from "react-router-dom";

// Image Imports
import img from "../../assets/Mask group.png";

export function DishDetails() {

  const navigate = useNavigate();
  const isAdmin = false;
  const price = 10;

  function handleDishEdit() {
    navigate(`/dishedit/${price}`);
  }

  function handleAdd() {
    alert("Adicionado");
  }

  return (
    <Container>
      <Header />

      <Content>
        <ButtonText />

        <div>
          <img src={img} />
          <div className="content">
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            <div className="ingredients">
              <Ingredient title="Alface" />
              <Ingredient title="Cebola" />
              <Ingredient title="Croutons" />
              <Ingredient title="Pepino" />
              <Ingredient title="Rabanete" />
              <Ingredient title="Tomate" />
            </div>

            {isAdmin ?
              <div className="buttons">
                <Button
                  title="Editar prato"
                  onClick={handleDishEdit}
                />
              </div>
              :
              <div className="buttons">
                <Stepper />
                <ButtonIcon
                  title={`Pedir - R$${String(price)},00`}
                  icon
                  onClick={handleAdd}
                />
              </div>
            }
          </div>
        </div>
      </Content>
      
      <Footer />
    </Container>
  );
}
