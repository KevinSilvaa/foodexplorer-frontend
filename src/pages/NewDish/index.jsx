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

// Strategic Imports
import { useState } from "react";

// Icons Imports
import { FiUpload } from "react-icons/fi";

export function NewDish() {

  const isAdmin = true;
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

        <Section title={isAdmin ? "Editar prato" : "Novo prato"}>
          <Form>
            <InputFile
              icon={FiUpload}
              title="Imagem do prato"
              text="Selecione a imagem"
              id="1"
            />

            <Input
              title="Nome"
              placeholder="Ex: Salada Caesar"
              id="2"
            />

            <Select />

            <div className="ingredients">
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
          </Form>
        </Section>
      </Content>
    </Container>
  );
}
