// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

// Strategic Imports
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function updateFavorites(id) {
    const favorites = JSON.parse(localStorage.getItem("@foodexplorer:favorites"));
    const newFavoritesList = favorites.filter(e => e.dish_id !== id);
    localStorage.setItem("@foodexplorer:favorites", JSON.stringify(newFavoritesList));
  }

  async function handleRemoveFavorite(id) {
    await api.delete(`/favorites/${id}`);
    updateFavorites(id);

    alert("Prato removido dos favoritos com sucesso!");
    

    setFavorites(prevState => prevState.filter(favorite => favorite.dish_id !== id));
  }

  useEffect(() => {
    async function fetchFavorite() {
      const response = await api.get('/favorites')
      setFavorites(response.data)
    }

    fetchFavorite();
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <Section title="Meus favoritos">
          {favorites.length > 0 ?
            <ul className="all-dishes">
              {
                favorites.map(favorite => (
                  <li className="dish" key={favorite.dish_id}>
                    <img
                      src={`${api.defaults.baseURL}/files/${favorite.image}`}
                      alt="Foto do prato"
                    />

                    <div className="info">
                      <h2>{favorite.name}</h2>
                      <button onClick={() => handleRemoveFavorite(favorite.dish_id)}>Remover dos favoritos</button>
                    </div>
                  </li>
                ))
              }
            </ul>

            :

            <h1>Nenhum prato favoritado.</h1>
          }

        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
