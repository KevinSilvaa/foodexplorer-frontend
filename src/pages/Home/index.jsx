// Styling Imports
import { Container, Content, Banner } from "./styles";

// Components imports
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Slider } from "../../components/Slider";
import { Footer } from "../../components/Footer";

// Strategic Imports


// Icons Imports


// Image Imports
import background from "../../assets/bannerbg.svg";

// *TODO FAZER O MAP PARA CADA CARD

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
          <Slider />
        </Section>

        <Section title="Pratos principais">
          <Slider />
        </Section>

        <Section title="Bebidas">
          <Slider />
        </Section>

      </Content>
      <Footer />
    </Container>
  );
}
