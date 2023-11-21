// Styling Imports
import { Container, Field } from "./styles";

// Strategic Imports
import { useEffect, useState } from "react";

// Icons Imports
import { LuBeef, LuCakeSlice, LuCheck, LuChevronDown, LuChevronUp, LuCupSoda, LuSalad } from "react-icons/lu"

export function Select({ changeValue, value }) {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function Selected() {
      document.querySelectorAll(".option input").forEach(input => {
        input.addEventListener("click", event => {
          document.getElementById("selected-value").textContent = input.dataset.label;
          setIsOpen(true);
        })
      })
    } 
    Selected();
  }, [])

  function handleClick() {
    document.querySelectorAll("#category-select input").forEach(input => {
      input.click(document.getElementById("options-view"));
    });
  }

  return (
    <Container>
      <Field id="category-select">
        <label htmlFor="options-view">Categoria</label>
        <input type="checkbox" id="options-view"></input>
        
        <div id="select-button">
          <div id="selected-value">{value ? value : "Selecione uma opção"}</div>

          <div id="chevrons">
            <LuChevronDown />
            <LuChevronUp />
          </div>
        </div>
      </Field>

      <ul id="options" onChange={changeValue}>
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
            value="Bebidas"
            data-label="Bebidas"
          />

          <LuCupSoda />
          <span className="label">Bebidas</span>
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
      </ul>
    </Container>
  );
}
