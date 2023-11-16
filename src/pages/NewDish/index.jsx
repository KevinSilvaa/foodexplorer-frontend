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
import { Footer } from "../../components/Footer";
import { Textarea } from "../../components/Textarea";

// Strategic Imports
import { useState } from "react";

// Icons Imports
import { FiUpload } from "react-icons/fi";

export function NewDish() {

  const [newIngredient, setNewIngredient] = useState("");

  function handleTest() {
    alert(`Adicionando ${newIngredient} a lista de ingredientes`);
    setNewIngredient("");
  }

  return (
    <Container>
      <Header />

      <Content id="content">
        <ButtonText />

        <Section title="Novo prato">
          <Form>
            <InputFile
              icon={FiUpload}
              title="Imagem do prato"
              text="Selecione imagem"
              id="image"
            />

            <Input
              title="Nome"
              placeholder="Ex: Salada Caesar"
              id="name"
            />

            <Select />
            <div>
              <label htmlFor="ingredients">Ingredientes</label>
              
              <div className="ingredients" id="ingredients">
                <IngredientTag
                  value="Croutons"
                />

                <IngredientTag
                  isNew
                  placeholder="Adicionar"
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleTest}
                />
              </div>

            </div>

            <Input
              title="Preço"
              placeholder="R$ 00,00"
              id="price"
            />

            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              id="textarea"
              title="Descrição"
            />

            <Button
              title="Salvar Alterações"
            />

          </Form>
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
