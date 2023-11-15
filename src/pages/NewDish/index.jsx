// Styling Imports
import { Container, Content, Form } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";

// Strategic Imports


// Icons Imports
import { FiUpload, FiUser } from "react-icons/fi";
import { InputFile } from "../../components/InputFile";

export function NewDish() {

  const isAdmin = true;

  return (
    <Container>
      <Header />

      <Content id="content">
        <ButtonText />

        <Section title={isAdmin ? "Editar prato" : "Novo prato"}>
          <Form>
            <InputFile
              icon={FiUpload}
              title="Imagem do prato"
              text="Selecione a imagem"
              id="1"
            />

            <Input
              icon={FiUser}
              title="Imagem do prato"
              placeholder="Testando input"
              text="Selecione a imagem"
              id="1"
            />
          </Form>
        </Section>
      </Content>
    </Container>
  );
}
