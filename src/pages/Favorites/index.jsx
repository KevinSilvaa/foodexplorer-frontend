// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

// Strategic Imports

export function Favorites() {

  return (
    <Container>
      <Header />

      <Content>
        <Section title="Meus favoritos">
          <div className="all-dishes">
            <div className="dish">
              <img
                src="http://localhost:3333/files/34d4c6d643b6e09dc303-a.png"
                alt="Foto do prato"
              />

              <div className="info">
                <h2>Coca Cola</h2>
                <button>Remover dos favoritos</button>
              </div>
            </div>

            <div className="dish">
              <img
                src="http://localhost:3333/files/34d4c6d643b6e09dc303-a.png"
                alt="Foto do prato"
              />

              <div className="info">
                <h2>Coca Cola</h2>
                <button>Remover dos favoritos</button>
              </div>
            </div>

            <div className="dish">
              <img
                src="http://localhost:3333/files/34d4c6d643b6e09dc303-a.png"
                alt="Foto do prato"
              />

              <div className="info">
                <h2>Coca Cola</h2>
                <button>Remover dos favoritos</button>
              </div>
            </div>

            <div className="dish">
              <img
                src="http://localhost:3333/files/34d4c6d643b6e09dc303-a.png"
                alt="Foto do prato"
              />

              <div className="info">
                <h2>Coca Cola</h2>
                <button>Remover dos favoritos</button>
              </div>
            </div>
            <div className="dish">
              <img
                src="http://localhost:3333/files/34d4c6d643b6e09dc303-a.png"
                alt="Foto do prato"
              />

              <div className="info">
                <h2>Coca Cola</h2>
                <button>Remover dos favoritos</button>
              </div>
            </div>
            <div className="dish">
              <img
                src="http://localhost:3333/files/34d4c6d643b6e09dc303-a.png"
                alt="Foto do prato"
              />

              <div className="info">
                <h2>Coca Cola</h2>
                <button>Remover dos favoritos</button>
              </div>
            </div>
            <div className="dish">
              <img
                src="http://localhost:3333/files/34d4c6d643b6e09dc303-a.png"
                alt="Foto do prato"
              />

              <div className="info">
                <h2>Coca Cola</h2>
                <button>Remover dos favoritos</button>
              </div>
            </div>
            <div className="dish">
              <img
                src="http://localhost:3333/files/34d4c6d643b6e09dc303-a.png"
                alt="Foto do prato"
              />

              <div className="info">
                <h2>Coca Cola</h2>
                <button>Remover dos favoritos</button>
              </div>
            </div>

          </div>

        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
