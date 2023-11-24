// Styling Imports
import { Container, Content, Banner } from "./styles";

// Components imports
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Slider } from "../../components/Slider";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { SplideSlide } from "@splidejs/react-splide";

// Strategic Imports
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Image Imports
import background from "../../assets/bannerbg.svg";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/dishdetails/${id}`)
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${search}`);
      setDishes(response.data);
    }

    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />

      <Content id="content">
        <Banner>
          <img src={background} />

          <div className="background">
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
        </Banner>


        <Section title="Refeições">
          <Slider>
            {dishes.length > 0 ?
              dishes.filter(dish => dish.category === "Refeições")
                .map(dish => (
                  <SplideSlide key={dish.id}>
                    <Card
                      key={String(dish.id)}
                      title={dish.name}
                      price={dish.price}
                      description={dish.description}
                      onClick={() => handleDetails(dish.id)}
                      id={dish.id}
                      image={`${api.defaults.baseURL}/files/${dish.image}`}
                    />
                  </SplideSlide>
                ))

              :

              <h1 className="nothing-added">Nenhum prato registrado nesta categoria</h1>
            }
          </Slider>
        </Section>

        <Section title="Pratos principais">
          <Slider>
            {dishes.length > 0 ?
              dishes.filter(dish => dish.category === "Pratos principais")
                .map(dish => (
                  <SplideSlide key={dish.id}>
                    <Card
                      key={String(dish.id)}
                      title={dish.name}
                      price={dish.price}
                      description={dish.description}
                      onClick={() => handleDetails(dish.id)}
                      id={dish.id}
                      image={`${api.defaults.baseURL}/files/${dish.image}`}
                    />
                  </SplideSlide>
                ))

              :

              <h1 className="nothing-added">Nenhum prato registrado nesta categoria</h1>
            }
          </Slider>
        </Section>

        <Section title="Bebidas">
          <Slider>
            {dishes.length > 0 ?
              dishes.filter(dish => dish.category === "Bebidas")
                .map(dish => (
                  <SplideSlide key={dish.id}>
                    <Card
                      key={String(dish.id)}
                      title={dish.name}
                      price={dish.price}
                      description={dish.description}
                      onClick={() => handleDetails(dish.id)}
                      id={dish.id}
                      image={`${api.defaults.baseURL}/files/${dish.image}`}
                    />
                  </SplideSlide>
                ))

              :

              <h1 className="nothing-added">Nenhum prato registrado nesta categoria</h1>
            }
          </Slider>
        </Section>

        <Section title="Sobremesas">
          <Slider>
            {dishes.length > 0 ?
              dishes.filter(dish => dish.category === "Sobremesas")
                .map(dish => (
                  <SplideSlide key={dish.id}>
                    <Card
                      key={String(dish.id)}
                      title={dish.name}
                      price={dish.price}
                      description={dish.description}
                      onClick={() => handleDetails(dish.id)}
                      id={dish.id}
                      image={`${api.defaults.baseURL}/files/${dish.image}`}
                    />
                  </SplideSlide>
                ))

              :

              <h1 className="nothing-added">Nenhum prato registrado nesta categoria</h1>
            }
          </Slider>
        </Section>

      </Content>
      <Footer />
    </Container>
  );
}
