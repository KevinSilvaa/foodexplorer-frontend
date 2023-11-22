// Styling Imports
import { Container } from "./styles";

// Components Imports
import { Stepper } from "../Stepper";
import { Button } from "../Button";

// Strategic Imports
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

// Icons Imports
import { PiPencil, PiHeart } from "react-icons/pi";

export function Card({ title, price, description, onClick, id, handleFavorite, image }) {

  const { user } = useAuth();

  const navigate = useNavigate();

  const isAdmin = user.role === "admin";

  function handleEdit() {
    navigate(`/editdish/${id}`);
  }

  function handleAdd() {
    alert("Adicionado");
  }

  return (
    <Container>
      <button className="favorite" onClick={isAdmin ? handleEdit : handleFavorite}>
        {isAdmin ? <PiPencil size={24} /> : <PiHeart size={24} />}
      </button>

      <div onClick={onClick}>
        <img src={image} alt="Foto do prato" />
        <h2>{title}</h2>
        <p className="desc">{description}</p>
      </div>

      <span>R$ {price}</span>

      {
        isAdmin ? ""

          :

          <div className="buttons">
            <Stepper />

            <Button
              title="Incluir"
              onClick={handleAdd}
            />
          </div>
      }
    </Container>
  );
}
