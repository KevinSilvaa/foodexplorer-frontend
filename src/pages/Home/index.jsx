// Styling Imports
import { Container, Content, Banner } from "./styles";

// Components imports
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

// Strategic Imports


// Icons Imports


// Image Imports
import background from "../../assets/bannerbg.svg";

export function Home() {

  // Hide header when click hamburger menu

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
      </Content>
    </Container>
  );
}
