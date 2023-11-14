// Styling Imports
import { Container, Content, Banner } from "./styles";

// Components imports
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";

// Strategic Imports


// Icons Imports


// Image Imports
import background from "../../assets/bannerbg.svg";
import { Card } from "../../components/Card";

// *TODO FAZER O SLIDER PARA TODAS AS SEÇÕES

export function Home() {

  return (
    <Container>
      <Header />

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
          
        </Section>

        <Section title="Pratos principais">

        </Section>

        <Section title="Bebidas">

        </Section>

      </Content>
      <Footer />
    </Container>
  );
}
