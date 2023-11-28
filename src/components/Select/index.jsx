// Styling Imports
import { Container, Field } from "./styles";

// Strategic Imports
import { useEffect, useState } from "react";

// Icons Imports
import { LuChevronDown, LuChevronUp } from "react-icons/lu"

export function Select({ changeValue, value, children }) {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function Selected() {
      document.querySelectorAll(".option input").forEach(input => {
        input.addEventListener("click", () => {
          document.getElementById("selected-value").textContent = input.dataset.label;
          setIsOpen(true);
        })
      })
    } 
    Selected();
  }, [])

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
        {children}
      </ul>
    </Container>
  );
}
