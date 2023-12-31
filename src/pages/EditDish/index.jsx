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

// Strategic Imports
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

// Icons Imports
import { FiUpload } from "react-icons/fi";
import { LuBeef, LuCakeSlice, LuCheck, LuCupSoda, LuSalad } from "react-icons/lu";

export function EditDish() {
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [category, setCategory] = useState([]);

  const [ingredients, setingredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleClick() {
    document.querySelectorAll("#category-select input").forEach(input => {
      input.click(document.getElementById("options-view"));
    });
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

  function handleAddIngredient() {
    if (newIngredient === "") {
      return alert("Você não pode adicionar um ingrediente vazio.");
    }
    setingredients(prevState => [...prevState, newIngredient])
    setNewIngredient("");
    document.getElementById("ingredient-model").focus();
  }

  function handleRemoveIngredient(deleted) {
    setingredients(ingredients => ingredients.filter(ingredient => ingredient !== deleted));
  }

  async function handleUpdateDish() {
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

    await api.put(`/dishes/${params.id}`, {
      name,
      category,
      price,
      description,
      ingredients
    });

    const formData = new FormData();
    formData.append("image", imageFile);

    api.patch(`/dishes/image/${params.id}`, formData);

    alert("Prato atualizado com sucesso!");
    navigate("/");

    setLoading(false);
  }

  function handleRemoveDish() {
    setLoadingDelete(true);
    const confirm = window.confirm("Você tem certeza que deseja excluir este prato?");

    if (!confirm) {
      return;
    }

    setLoadingDelete(true);

    api.delete(`/dishes/${params.id}`)
      .then(() => {
        alert("Prato excluido com sucesso!");
        navigate("/");
        setLoadingDelete(false);
      })
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);

      const { name, category, price, description, ingredients, imageFile } = response.data;
      setName(name);
      setPrice(price);
      setCategory(category);
      setDescription(description);
      setingredients(ingredients.map(ingredient => ingredient.name));
      setImageFile(imageFile);
    }

    fetchDish();
  }, [])

  return (
    <Container>
      <Header />

      <Content id="content">
        <ButtonText />

        <Section title="Editar prato">
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
                onChange={handleChangeImage}
              />
            </div>

            <Input
              title="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <Select value={category} changeValue={e => setCategory(e.target.value)}>
              <li className="option" onClick={handleClick}>
                <input
                  type="radio"
                  name="category"
                  value="Refeições"
                  data-label="Refeições"
                />

                <LuSalad />
                <span className="label">Refeições</span>
                <LuCheck />
              </li>

              <li className="option" onClick={handleClick}>
                <input
                  type="radio"
                  name="category"
                  value="Pratos principais"
                  data-label="Pratos principais"
                />

                <LuBeef />
                <span className="label">Pratos principais</span>
                <LuCheck />
              </li>

              <li className="option" onClick={handleClick}>
                <input
                  type="radio"
                  name="category"
                  value="Sobremesas"
                  data-label="Sobremesas"
                />

                <LuCakeSlice />
                <span className="label">Sobremesas</span>
                <LuCheck />
              </li>

              <li className="option" onClick={handleClick}>
                <input
                  type="radio"
                  name="category"
                  value="Bebidas"
                  data-label="Bebidas"
                />

                <LuCupSoda />
                <span className="label">Bebidas</span>
                <LuCheck />
              </li>

            </Select>

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
              title="Preço"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />

            <Textarea
              value={description}
              title="Descrição"
              onChange={e => setDescription(e.target.value)}
            />

            <div className="buttons">
              <Button
                title="Excluir prato"
                onClick={handleRemoveDish}
                loading={loadingDelete}
              />
              <Button
                title="Salvar Alterações"
                onClick={handleUpdateDish}
                loading={loading}
              />
            </div>
          </Form>
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
