// Styling Imports
import { Container } from "./styles";

// Components Imports
import { Stepper } from "../Stepper";
import { Button } from "../Button";

// Strategic Imports
import { Link } from "react-router-dom";

// Icons Imports
import { PiPencil, PiHeart } from "react-icons/pi";

// Image Imports
import img from "../../assets/Mask group-1.png";

export function Card({ title, price, description }) {

  const isAdmin = false;

  function handleFavorite() {
    alert("Favoritando");
  }

  function handleEdit() {
    alert("Editando");
  }

  function handleAdd() {
    alert("Adicionado");
  }

  return (
    <Container>
      <button className="favorite" onClick={isAdmin ? handleEdit : handleFavorite}>
        {isAdmin ? <PiPencil size={24} /> : <PiHeart size={24} />}
      </button>

      <Link to="/dishdetails">
        <img src={img} />
        <h2>{title}</h2>
        <p className="desc">{description}</p>
      </Link>

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
