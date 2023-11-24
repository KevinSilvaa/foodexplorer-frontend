// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Stepper } from "../../components/Stepper";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";

// Strategic Imports
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function DishDetails() {
  const [data, setData] = useState(null);

  const [image, setImage] = useState(null);
  const { user } = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  const isAdmin = user.role === "admin"

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
      setImage(response.data.image);
    } 
    
    fetchDish();
  }, []);
  
  function handleDishEdit() {
    navigate(`/editdish/${params.id}`);
  }
  
  function handleAdd() {
    alert("Adicionado");
  }
  
  const imageUrl = `${api.defaults.baseURL}/files/${image}`;

  return (
    <Container>
      <Header />

      {data &&
        <Content>
          <ButtonText />

          <div>
            <img src={imageUrl} alt="Imagem do prato" />
            <div className="content">
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              <div className="ingredients">
                {
                  data.ingredients.map(ingredient => (
                    <Ingredient
                      key={ingredient.id}
                      title={ingredient.name}
                    />
                  ))
                }
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
                    title={`Pedir - R$${data.price}`}
                    icon
                    onClick={handleAdd}
                  />
                </div>
              }
            </div>
          </div>
        </Content>
      }

      <Footer />
    </Container>
  );
}
