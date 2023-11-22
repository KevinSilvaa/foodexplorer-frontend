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
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

// Icons Imports
import { FiUpload } from "react-icons/fi";

export function NewDish() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  function handleAddImage(event) {
    const file = event.target.files[0]
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

  function handleAddIngredient() {
    if (newIngredient === "") {
      return alert("Você não pode adicionar um ingrediente vazio.");
    }
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
    document.getElementById("ingredient-model").focus();
  }
  
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }
  
  async function handleNewDish() {
    if (!name) {
      return alert("Digite o nome do prato");
    }

    if (!category || category === "Selecione uma opção") {
      return alert("Selecione a categoria do prato");
    }

    if (!price) {
      return alert("Digite o preço do prato");
    }

    if (newIngredient.value === "") {
      return alert("Você não pode adicionar um ingrediente vazio.");
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar, clique para adicioná-lo ou deixe o campo vazio.");
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    
    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ));

    await api.post("/dishes", formData)
    .then(() => {
      alert("Prato criado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível criar o prato!");
      }
    }) 

    setLoading(false);
  }


  return (
    <Container>
      <Header />

      <Content id="content">
        <ButtonText />

        <Section title="Novo prato">
          <Form>

            <div>
              {image &&
                <img
                  src={image}
                  alt="Foto do prato"
                />
              }
              <InputFile
                icon={FiUpload}
                title="Imagem do prato"
                text="Selecione imagem"
                onChange={handleAddImage}
              />
            </div>

            <Input
              placeholder="Ex: Salada Caesar"
              title="Nome"
              onChange={e => setName(e.target.value)}
              id="name"
              autoComplete="true"
            />

            <Select changeValue={e => setCategory(e.target.value)} />

            <div>

              <label htmlFor="ingredients">Ingredientes</label>
              <div id="ingredients">

                {
                  ingredients.map((ingredient, index) => (
                    <IngredientTag
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }

                <IngredientTag
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                  id="ingredient-model"
                />
              </div>

            </div>

            <Input
              placeholder="R$ 00,00"
              title="Preço"
              onChange={e => setPrice(e.target.value)}
              id="price"
            />

            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              title="Descrição"
              onChange={e => setDescription(e.target.value)}
            />

            <Button
              title="Salvar Alterações"
              onClick={handleNewDish}
              loading={loading}
            />

          </Form>
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
