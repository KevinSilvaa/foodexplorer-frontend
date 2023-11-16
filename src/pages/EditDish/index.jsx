// Styling Imports
import { Container, Content, Form } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { InputFile } from "../../components/InputFile";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { IngredientTag } from "../../components/IngredientTag";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { Footer } from "../../components/Footer";

// Icons Imports
import { FiUpload } from "react-icons/fi";

export function EditDish() {

  return (
    <Container>
      <Header />

      <Content id="content">
        <ButtonText />

        <Section title="Editar prato">
          <Form>
            <InputFile
              icon={FiUpload}
              title="Imagem do prato"
              text="Selecione imagem"
              id="1"
            />

            <Input
              title="Nome"
              placeholder="Ex: Salada Caesar"
              id="2"
            />

            <Select />

            <div>
              <label htmlFor="ingredients">Ingredients</label>
              <div className="ingredients">
                <IngredientTag
                  value="Croutons"
                />

                <IngredientTag
                  isNew
                  placeholder="Adicionar"
                />
              </div>
            </div>

            <Input
              title="Preço"
              placeholder="R$ 00,00"
            />

            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              id="textarea"
              title="Descrição"
            />

            <div className="buttons">
              <Button
                title="Excluir prato"
              />
              <Button
                title="Salvar Alterações"
              />
            </div>
          </Form>
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
