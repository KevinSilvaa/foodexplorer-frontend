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

  async function handleAddFavorite() {
    api.post("/favorites", { dish_id: data.id })
      .then(() => {
        setFavorite(true);
        setFavorites(prevState => [...prevState, data.id]);
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
        setFavorites(prevState => prevState.filter(favoriteId => favoriteId !== data.id));
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

  function handleAdd() {
    alert("Adicionado");
  }

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get(`/favorites`)
      setFavorite(response.data);
    }

    fetchFavorites();
  }, [data.id])

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
            {favorite && favorites.length > 0 ?
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
              <Stepper />

              <Button
                title="Incluir"
                onClick={handleAdd}
              />
            </div>
          </>
      }
    </Container>
  );
}
