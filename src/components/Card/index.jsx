// Styling Imports
import { Container } from "./styles";

// Components Imports
import { Stepper } from "../Stepper";
import { Button } from "../Button";

// Strategic Imports
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

// Icons Imports
import { PiPencil, PiHeart, PiHeartFill } from "react-icons/pi";

export function Card({ data, ...rest }) {
  const [favorite, setFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [favoritesList, setFavoritesList] = useState(JSON.parse(localStorage.getItem("@foodexplorer:favorites")));
  const [quantity, setQuantity] = useState(1);

  const { user } = useAuth();

  const navigate = useNavigate();
  const imageUrl = data.image ? `${api.defaults.baseURL}/files/${data.image}` : "NotFound";

  const isAdmin = user.role === "admin";

  function handleEdit() {
    navigate(`/editdish/${data.id}`);
  }

  function handleDetails() {
    navigate(`/dishdetails/${data.id}`)
  }

  async function saveFavorites() {
    const response = await api.get("/favorites");

    for (let dish of response.data) {
      if (dish.dish_id === data.id) {
        const existingFavorites = JSON.parse(localStorage.getItem("@foodexplorer:favorites"));
        existingFavorites == null ? [] : existingFavorites;

        if (existingFavorites.find(e => e.dish_id === data.id)) {
          setFavoritesList(existingFavorites);
          return;
        }

        existingFavorites.push(dish);
        localStorage.setItem("@foodexplorer:favorites", JSON.stringify(existingFavorites));
        setFavoritesList(JSON.parse(localStorage.getItem("@foodexplorer:favorites")));
      }
    }
  }

  function updateFavorites() {
    const favorites = JSON.parse(localStorage.getItem("@foodexplorer:favorites"));
    const newFavoritesList = favorites.filter(e => e.dish_id !== data.id);
    setFavoritesList(newFavoritesList)
    localStorage.setItem("@foodexplorer:favorites", JSON.stringify(newFavoritesList));
  }

  async function handleAddFavorite() {
    api.post("/favorites", { dish_id: data.id })
      .then(() => {
        setFavorite(true);
        saveFavorites();
        alert("Prato adicionado aos favoritos!");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível adicionar este produto aos favoritos");
        }
      })
  }

  async function handleRemoveFavorite() {
    api.delete(`/favorites/${data.id}`)
      .then(() => {
        setFavorite(false);
        updateFavorites();
        alert("Prato removido dos favoritos!");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível remover este produtos dos favoritos");
        }
      })
  }

  async function handleRequest() {
    await api.post("/requests", {
      dish_id: data.id,
      quantity
    })
      .then(() => {
        alert("Prato adicionado com sucesso ao carrinho de compras");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível adicionar o prato ao carrinho de compras");
        }
      })
  }

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get(`/favorites`);
      setFavorite(response.data);
    }

    fetchFavorites();
  }, [data.id])

  useEffect(() => {
    async function saveFavorites() {
      const response = await api.get("/favorites");

      for (let dish of response.data) {
        if (dish.dish_id === data.id) {
          const existingFavorites = JSON.parse(localStorage.getItem("@foodexplorer:favorites"));

          existingFavorites == null ? [] : existingFavorites;
          setFavoritesList(existingFavorites);
        }
      }
    }

    saveFavorites();
  }, [favorites])

  return (
    <Container {...rest}>
      {
        isAdmin ?
          <>
            <button className="favorite" onClick={handleEdit}>
              <PiPencil size={24} />
            </button>

            <div onClick={handleDetails}>
              <img src={imageUrl} alt="Foto do prato" />
              <h2>{data.name}</h2>
              <p className="desc">{data.description}</p>
            </div>

            <span>R$ {
              data.price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </span>

          </>

          :

          <>
            {favoritesList.find(e => e.dish_id === data.id) ?
              <button className="favorite" onClick={handleRemoveFavorite}>
                <PiHeartFill size={24} />
              </button>
              :
              <button className="favorite" onClick={handleAddFavorite}>
                <PiHeart size={24} />
              </button>

            }

            <div onClick={handleDetails}>
              <img src={imageUrl} alt="Foto do prato" />
              <h2>{data.name}</h2>
              <p className="desc">{data.description}</p>
            </div>

            <span>R$ {
              data.price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </span>

            <div className="buttons">
              <Stepper quantity={quantity} setQuantity={setQuantity} />

              <Button
                title="Incluir"
                onClick={handleRequest}
              />
            </div>
          </>
      }
    </Container>
  );
}
